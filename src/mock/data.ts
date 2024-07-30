import { User } from '../entity/user.entity';
import { Lesson } from '../entity/lesson.entity';
import { UserRole } from '../enums/UserRole';
import { StudentLesson } from '../entity/student_lesson.entity';

export const users = <User[]>[
  {
    id: '1',
    email: 'anhctp@gmail.com',
    username: 'anhctp',
    name: 'Cao Thi Phuong Anh',
    role: UserRole.ADMIN,
  },
  {
    id: '2',
    email: 'anhctp+1@gmail.com',
    username: 'anhctp.student',
    name: 'Cao Thi Phuong Anh Student',
    role: UserRole.STUDENT,
  },
  {
    id: '3',
    email: 'anhctp+2@gmail.com',
    username: 'anhctp.instructor',
    name: 'Cao Thi Phuong Anh Instructor',
    role: UserRole.INSTRUCTOR,
  },
];

export const fullLessons = [
  {
    id: '1234',
    title: 'Ruby',
    content: `Hướng dẫn học MySQL
      Phần này sẽ giúp cho các bạn nắm được các nguyên tắc cơ bản về cơ sở dữ liệu quan hệ và các kỹ năng lập trình SQL. Các chủ đề bao gồm kiến trúc cơ sở dữ liệu quan hệ, kỹ thuật thiết kế cơ sở dữ liệu và các kỹ năng truy vấn đơn giản và phức tạp. Sau khi hoàn thành, các bạn sẽ hiểu các hàm SQL, tham gia các kỹ thuật, các đối tượng cơ sở dữ liệu và các ràng buộc và sẽ có thể viết các câu lệnh SELECT, INSERT, UPDATE và DELETE hữu ích.Trong 1 ngày các bạn focus vào các nội dung bên dưới:
      Thiết kế cơ sở dữ liệu quan hệ
      Thao tác tạo Cơ sở dữ liệu và tables
      Viết được các truy vấn dữ liệu (cơ bản đến nâng cao)
      Hiểu và thao tác được với Transaction
      Nắm được Views, Function, Triggers và stored procedures (không bắt buộc)
      Kết thúc khóa học, các bạn có thể nắm được:
      Thiết kế các cấu trúc bảng chuẩn hóa cho các cơ sở dữ liệu quan hệ
      Tạo cơ sở dữ liệu và bảng
      Sử dụng primary and foreign keys
      Sử dụng toán tử thiết lập (UNION, INTERSECT, EXCEPT)
      Sử dụng DML cho SELECT, INSERT, UPDATE, DELETE
      Viết các Query cơ bản với Where and optional khác (group by, order, having,...)
      Viết các Query nâng cao: Join và subquery
      Hiểu thế nào là Transaction và vai trò của Transaction
      Sử dụng triggers and stored procedures`,
    file_url: '/src/public/stylesheets/bootstrap.min.css',
    study_time: new Date('2024-01-22'),
    done: false,
  },
  {
    id: '1235',
    title: 'MySQL',
    content: `Hướng dẫn học MySQL
      Phần này sẽ giúp cho các bạn nắm được các nguyên tắc cơ bản về cơ sở dữ liệu quan hệ và các kỹ năng lập trình SQL. Các chủ đề bao gồm kiến trúc cơ sở dữ liệu quan hệ, kỹ thuật thiết kế cơ sở dữ liệu và các kỹ năng truy vấn đơn giản và phức tạp. Sau khi hoàn thành, các bạn sẽ hiểu các hàm SQL, tham gia các kỹ thuật, các đối tượng cơ sở dữ liệu và các ràng buộc và sẽ có thể viết các câu lệnh SELECT, INSERT, UPDATE và DELETE hữu ích.Trong 1 ngày các bạn focus vào các nội dung bên dưới:
      Thiết kế cơ sở dữ liệu quan hệ
      Thao tác tạo Cơ sở dữ liệu và tables
      Viết được các truy vấn dữ liệu (cơ bản đến nâng cao)
      Hiểu và thao tác được với Transaction
      Nắm được Views, Function, Triggers và stored procedures (không bắt buộc)
      Kết thúc khóa học, các bạn có thể nắm được:
      Thiết kế các cấu trúc bảng chuẩn hóa cho các cơ sở dữ liệu quan hệ
      Tạo cơ sở dữ liệu và bảng
      Sử dụng primary and foreign keys
      Sử dụng toán tử thiết lập (UNION, INTERSECT, EXCEPT)
      Sử dụng DML cho SELECT, INSERT, UPDATE, DELETE
      Viết các Query cơ bản với Where and optional khác (group by, order, having,...)
      Viết các Query nâng cao: Join và subquery
      Hiểu thế nào là Transaction và vai trò của Transaction
      Sử dụng triggers and stored procedures`,
    file_url: '/src/public/stylesheets/bootstrap.min.css',
    study_time: new Date('2024-01-23'),
    done: true,
  },
  {
    id: '1236',
    title: 'Git',
    content: `Hướng dẫn học MySQL
      Phần này sẽ giúp cho các bạn nắm được các nguyên tắc cơ bản về cơ sở dữ liệu quan hệ và các kỹ năng lập trình SQL. Các chủ đề bao gồm kiến trúc cơ sở dữ liệu quan hệ, kỹ thuật thiết kế cơ sở dữ liệu và các kỹ năng truy vấn đơn giản và phức tạp. Sau khi hoàn thành, các bạn sẽ hiểu các hàm SQL, tham gia các kỹ thuật, các đối tượng cơ sở dữ liệu và các ràng buộc và sẽ có thể viết các câu lệnh SELECT, INSERT, UPDATE và DELETE hữu ích.Trong 1 ngày các bạn focus vào các nội dung bên dưới:
      Thiết kế cơ sở dữ liệu quan hệ
      Thao tác tạo Cơ sở dữ liệu và tables
      Viết được các truy vấn dữ liệu (cơ bản đến nâng cao)
      Hiểu và thao tác được với Transaction
      Nắm được Views, Function, Triggers và stored procedures (không bắt buộc)
      Kết thúc khóa học, các bạn có thể nắm được:
      Thiết kế các cấu trúc bảng chuẩn hóa cho các cơ sở dữ liệu quan hệ
      Tạo cơ sở dữ liệu và bảng
      Sử dụng primary and foreign keys
      Sử dụng toán tử thiết lập (UNION, INTERSECT, EXCEPT)
      Sử dụng DML cho SELECT, INSERT, UPDATE, DELETE
      Viết các Query cơ bản với Where and optional khác (group by, order, having,...)
      Viết các Query nâng cao: Join và subquery
      Hiểu thế nào là Transaction và vai trò của Transaction
      Sử dụng triggers and stored procedures`,
    file_url: '/src/public/stylesheets/bootstrap.min.css',
    study_time: new Date('2024-01-23'),
    done: false,
  },
];
