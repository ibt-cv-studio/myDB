import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DatabaseService {
  constructor(private prisma: PrismaService) {}

  async createDatabase(userId: string, name: string, engine: string) {
    return this.prisma.database.create({
      data: {
        name,
        engine,
        tenantId: userId,
        status: 'provisioning',
        connectionString: `postgresql://user:pass@db-${name}.universaldb.internal:5432/${name}`,
      },
    });
  }

  async getUserDatabases(userId: string) {
    return this.prisma.database.findMany({ where: { tenantId: userId } });
  }
}
