import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCourseData1722737899063 implements MigrationInterface {
  name = 'InsertCourseData1722737899063';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO courses (id, name, description, instructor_id, sub_instructor_id, assignment_id, image_url, duration, level) VALUES
        ('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'Web Development Fundamentals', 'Learn how to build websites.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, 'https://elearningindustry.com/wp-content/uploads/2021/03/shutterstock_745932934.png', '5 weeks', 'Intermediate'),
        ('c11d1e4f1-223b-4cdd-9f0e-0123456789a', 'Cybersecurity Essentials', 'Understand the basics of cybersecurity.', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, 'https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148919413.jpg', '3 weeks', 'Beginner'),
        ('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'Python for Data Science', 'Learn Python for data analysis and visualization.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, '8 weeks', 'Intermediate'),
        ('c13d1e4f1-223b-4cdd-9f0e-0123456789a', 'Database Management', 'Introduction to database concepts and SQL.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, 'https://animationexplainers.com/wp-content/uploads/2022/04/Employee-Training.jpg', '5 weeks', 'Beginner'),
        ('c14d1e4f1-223b-4cdd-9f0e-0123456789a', 'Cloud Computing Essentials', 'Understand cloud services and architecture.', '00e813f9-59f4-40aa-bd60-1825d7606314', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', NULL, NULL, '4 weeks', 'Advanced'),
        ('c15d1e4f1-223b-4cdd-9f0e-0123456789a', 'Artificial Intelligence', 'Explore AI concepts and applications.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-team-work-business_516790-1332.jpg', '10 weeks', 'Expert'),
        ('c1d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Introduction to Programming', 'Learn the basics of programming.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, NULL, '4 weeks', 'Beginner'),
        ('c2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Digital Marketing Strategy', 'Learn to create effective digital marketing plans.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, 'https://elearningindustry.com/wp-content/uploads/2021/03/shutterstock_745932934.png', '6 weeks', 'Intermediate'),
        ('c3d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Blockchain Fundamentals', 'Introduction to blockchain technology and its uses.', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, NULL, '7 weeks', 'Beginner'),
        ('c4d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Cybersecurity Advanced Practices', 'Advanced cybersecurity techniques and strategies.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, 'https://as2.ftcdn.net/v2/jpg/02/24/04/75/1000_F_224047592_T6VWHi0A74jGZogmE3faVK7dcmteIMvc.jpg', '9 weeks', 'Advanced'),
        ('c5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Mobile App Development', 'Learn to develop mobile applications.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', NULL, NULL, '8 weeks', 'Intermediate'),
        ('c6d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Project Management Essentials', 'Understand the basics of project management.', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-team-work-business_516790-1332.jpg', '5 weeks', 'Beginner'),
        ('c7d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Advanced Networking', 'Deep dive into networking protocols and configurations.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, '10 weeks', 'Advanced'),
        ('c8d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Advanced Data Structures', 'Deep dive into data structures.', '00e813f9-59f4-40aa-bd60-1825d7606314', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, 'https://t3.ftcdn.net/jpg/02/25/25/54/360_F_225255468_JIVcux271IOhuPqqrsRtvXeKmq5iu944.jpg', '6 weeks', 'Advanced'),
        ('c9d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Machine Learning Techniques', 'Explore machine learning algorithms.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', NULL, NULL, 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-team-work-business_516790-1332.jpg', '8 weeks', 'Expert');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM courses;`);
  }
}
