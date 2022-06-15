import {PrismaClient} from '@prisma/client';

export class CreateSeedData {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  public static init = () => new CreateSeedData();
  public exec = async () => {
    this.handler().finally(async () => {
      this.db?.$disconnect();
    });
  };

  private handler = async () => {
    console.log(`Please write seed logic here!`);
  };
}

CreateSeedData.init().exec();
