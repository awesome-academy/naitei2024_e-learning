import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertUserData1722737566500 implements MigrationInterface {
  name = 'InsertUserData1722737566500';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users (id, email, hash_password, username, role, name, birthday, avatar_url, phone, about) VALUES
        ('00e813f9-59f4-40aa-bd60-1825d7606314', 'nguyen.quang.anh@sun-asterisk.com', '$2b$10$cBvpEOwiSgshDbkhyi1.h.chwJDUydU9eXXcU1rAAwuu4utoCSIqC', 'anhnq', 'INSTRUCTOR', 'Nguyen Quang Anh', NULL, 'https://wallpapers-clan.com/wp-content/uploads/2024/04/avatar-the-last-airbender-aang-beautiful-desktop-wallpaper-preview.jpg', NULL, 'Data Engineer'),
        ('123878ff-cd3d-4c94-aee3-cab0e0f6b27e', 'phamminhv26@gmail.com', '$2b$10$WUum/TayekSCg7P2Guq69.aX02txwngO6Mfmo7uuMf6MdErhHjcwS', 'pmv', 'INSTRUCTOR', 'Pham Minh Vuong', NULL, 'https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-789.jpg', NULL, 'Fullstack Engineer'),
        ('378e1954-1a85-458b-bfa1-d904070f1d58', 'pham.thi.hong.ngan@sun-asterisk.com', '$2b$10$icM9rab8qK4mTumhXFIhMOGVay16oCHZkArBfWnXhpJ4H/z9NhaWK', 'nganpth', 'STUDENT', 'Pham Thi Hong Ngan', NULL, NULL, NULL, NULL),
        ('5877df58-ad78-4833-8b04-175e72b6e3db', 'pham.minh.vuong@sun-asterisk.com', '$2b$10$WG07nnnu2oTuocMBH.j99.GUsqMfsgtPvyQExBp3pFivu.VaeZlzG', 'vuongpm-0516', 'STUDENT', 'Pham Minh Vuong', NULL, NULL, NULL, NULL),
        ('7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'cao.thi.phuong.anh@sun-asterisk.com', '$2b$10$8Am90XB9ErV./evmEAvlgubarZXfz1euBTqUuIsXrxu.5vZ6Vyosm', 'anhctp', 'STUDENT', 'Cao Thi Phuong Anh', NULL, NULL, NULL, NULL),
        ('ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', 'zuanki@gmail.com', '$2b$10$dzOiO8hEwb/gjc4uPgaMWudDud43ta32ObURJP/WuWALjrk/CKYa2', 'hoanx', 'INSTRUCTOR', 'Nguyen Xuan Hoa', NULL, 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474219hWQ/hinh-avatar-dep-1.jpg', NULL, 'AI Engineer');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM users;`);
  }
}
