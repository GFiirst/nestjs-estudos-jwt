import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1753722157809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
                CREATE TABLE \`user\` (
                    \`id\` char(36) NOT NULL,
                    \`username\` varchar(30) NOT NULL,
                    \`email\` varchar(100) NOT NULL,
                    \`password\` varchar(255) NOT NULL,
                    PRIMARY KEY (\`id\`),
                    UNIQUE INDEX \`IDX_user_email\` (\`email\`)
                    ) ENGINE=InnoDB;
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
