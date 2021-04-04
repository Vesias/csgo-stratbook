import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';

import { Model, ObjectId } from 'mongoose';
import bcrypt from 'bcrypt';

import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  /**
   * Find user by document id
   * @param id user document id
   */
  public findById(id: string) {
    return this.userModel.findById(id).exec();
  }

  /**
   * Find a user by email
   * @param email email of the corresponding account
   */
  public findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  public async createUser(userName: string, email: string, password: string) {
    if (await this.isEmailInUse(email)) {
      throw new Error('email in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = new this.userModel({
      userName,
      email,
      password: hashedPassword,
    });

    if (this.configService.get<boolean>('debug.createUserWithConfirmedMail')) {
      createdUser.mailConfirmed = true;
    }

    return await createdUser.save();
  }

  public async isEmailInUse(email: string) {
    return await this.userModel.exists({
      email,
    });
  }

  /**
   * Updates the password field on a user document.
   * @param id user document id
   * @param newPassword new password
   * @returns query promise
   */
  public async updatePassword(id: ObjectId, newPassword: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    return await this.userModel.updateOne({ _id: id }, { password: hashedPassword });
  }

  public updateUserName(id: ObjectId, userName: string) {
    return this.userModel.updateOne({ _id: id }, { userName });
  }

  public updateCompletedTutorial(id: ObjectId, completedTutorial: boolean) {
    return this.userModel.updateOne({ _id: id }, { completedTutorial });
  }

  public testConnect() {}
}