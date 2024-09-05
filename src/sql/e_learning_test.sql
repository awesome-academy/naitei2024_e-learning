START TRANSACTION;

DROP DATABASE IF EXISTS `e_learning_test`;
CREATE DATABASE IF NOT EXISTS `e_learning_test`;
USE `e_learning_test`;

CREATE TABLE `answers` (
  `id` varchar(36) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `student_id` varchar(36) NOT NULL,
  `question_id` varchar(36) NOT NULL,
  `option_id` varchar(36) DEFAULT NULL,
  `attempt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `answer`, `student_id`, `question_id`, `option_id`, `attempt`) VALUES
('009ba8c0-ea07-4cbd-8021-944409481ad0', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 0),
('01ce3e02-93ed-49fb-96cb-238ad6567041', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', NULL, 2),
('041d3ea3-4e19-4b4e-9461-46aaea607c40', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q18', 'o53', 0),
('0676f6f2-3c7e-4f38-9164-ac809b9fd1ab', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q18', NULL, 1),
('0b200cdf-2206-4600-9020-12b7939d9645', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('0dd85e5c-d07e-4be9-bb71-2f3980834014', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q24', NULL, 0),
('0e1d7024-526f-45b3-b98b-88693aa2556e', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q11', 'o32', 0),
('103f460c-049d-4136-ab31-72ca5e84cc58', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('10b2ca3a-b065-4c20-a451-bb0f6195ee23', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q7', 'o19', 0),
('11355092-b1df-4bc0-a16c-eec7e6e3eee2', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q1', 'o1', 0),
('115e663a-f186-4ae4-823b-65710c4c4599', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 0),
('12d12e53-6674-4128-a42b-08e9ff748d9d', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o31', 0),
('13f9d4ae-55ee-42b5-957c-dc4575cd0073', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q12', 'o34', 0),
('1481a7f2-a435-4d98-90fc-90fe5ee4522e', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q18', 'o53', 0),
('14971735-843e-4971-b1d3-b3205027d593', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('17573870-1741-4d34-96db-962b2d1e03d9', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('17ddcb11-0f60-4f59-a6b2-cef0cec7c40e', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q25', 'o77', 0),
('18f7a819-3028-43ba-8997-f3fcadab95f1', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q18', NULL, 0),
('1a7d2441-bd9d-4101-bdfe-923abff2653b', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 0),
('1d5a093c-c0b9-4f34-a52a-38bd32492639', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o31', 0),
('1db24e7d-dd91-409f-b3cb-779b69192862', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q7', 'o21', 0),
('1e4e98ff-06c8-4333-843e-d535cb6b7460', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 0),
('2057ebff-c967-4b38-87c5-9a2eb453461d', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q7', NULL, 0),
('207f5dd9-ff4d-4859-8679-7f3b6c793d15', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q19', NULL, 0),
('21e5c860-3964-4a69-b430-9fcecdd484fd', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q12', 'o35', 0),
('23711631-fc00-4975-9ccc-e01cc2469962', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o32', 0),
('25673fc5-c83e-45cd-81b4-6bb2b5a668f1', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q19', 'o55', 0),
('274910ee-aa1a-427a-936f-4e074b430e9d', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 0),
('2872853a-b166-4f95-a32a-462d33b715aa', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', NULL, 0),
('2a3feb40-7e8e-4597-abfc-2f7febf9b723', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q10', 'o28', 0),
('2c09b71d-2f82-45a5-8f32-0a219e5ad2fd', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', NULL, 0),
('2cbbfab2-24dc-4d22-aabd-7a731e80a1fd', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', NULL, 2),
('302d12fa-82bf-4b10-bb65-88aa901f9c95', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q17', 'o50', 0),
('32835ef8-b259-4abd-bf6d-4c6ee6408c83', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('38fa9dbe-3a2e-4fa4-b78e-e5ebb5717bfa', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', 'o34', 1),
('396cd09d-023e-4237-885b-fe2faae7c598', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 0),
('3a51cbf9-af8b-4248-b148-86072ee25706', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q1', NULL, 0),
('3aea6bde-4229-436d-a286-ea233a70178c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('3c3468be-563c-4169-b613-e032818d0c60', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('3e88ebb0-82d3-4068-80bf-bbc71e4e40fa', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', NULL, 0),
('40e7e61f-d6d4-4e7b-bfba-25e9b6f49b10', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', NULL, 0),
('4366f4c2-82b7-40a8-9338-cecd2d73ad86', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q24', NULL, 1),
('437c3abf-5b01-4320-9873-4d3ed93d7c8a', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q8', NULL, 0),
('44233ff9-fc1e-42a5-baae-4441995c11cf', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', NULL, 0),
('45b46b14-2219-40fc-b637-f969ff661f87', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q25', NULL, 0),
('473ea3b2-7ba1-49f3-af87-0feb1df1aa7e', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q21', 'o63', 0),
('4a8cac32-a134-40b3-948f-b1900c7473d4', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 0),
('501979e5-13b7-4a8c-9ee5-caf52d5089ef', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 1),
('514ddbed-3af1-4963-892a-85c30d896e67', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q24', NULL, 0),
('5274e494-3125-4b90-9d67-87d00041b21a', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q24', 'o75', 0),
('550a0f7a-c681-4d05-a615-f32c8ca44716', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q8', NULL, 0),
('55135f5d-afc6-4c94-9840-cf1291e17766', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q8', 'o22', 0),
('565929bd-1dce-4895-adc5-dcbb4e168eb9', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', 'o34', 0),
('568c23b1-d41b-4a2a-ad77-9e3501ab1120', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q17', 'o49', 1),
('57054437-2143-4905-9aab-bc6bd03817e4', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q18', NULL, 0),
('5b08c0d6-92af-47b5-a29c-70a4c5578d27', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', 'o34', 0),
('5c0b7511-51ff-404a-899e-2e4c8e4973f5', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('5f28c777-0d17-4adf-adf7-50f48d83643c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('6409edd3-18e8-4369-9107-7366d77d42af', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q24', 'o74', 0),
('641226b2-f67a-4354-909d-4ccd30e369ef', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 0),
('651bd0db-e645-4d7b-954b-8c8f59509dc8', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o31', 0),
('66ca57ee-aa48-4458-ad54-f14c7b57df8a', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('6ce2ee48-8039-404b-9435-c2dd3a7304ae', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q17', 'o49', 0),
('6d1033dd-24f8-4b83-b1cb-dbceb1fcad1c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', NULL, 0),
('6f90c01d-a651-422b-8e2f-4a1de38f17dc', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', NULL, 0),
('7426bfc3-4528-4212-8761-3407b7919343', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q21', NULL, 0),
('78977b3f-6df5-4f1a-9b22-edfc8672fe4a', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q20', NULL, 0),
('78ab219e-aaf1-4b71-bc0b-8946268434be', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q7', NULL, 0),
('79658e36-3145-4ea6-be59-13f11d7fc09e', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q18', NULL, 0),
('79e02af3-e2d8-4fb8-a6a6-91b0a2e153f1', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q17', NULL, 0),
('7a49c2f0-ff8b-4c47-b6e6-9f78e9fbba84', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', NULL, 0),
('7d7f593f-3892-45df-98d7-41684dc9ec64', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q2', 'o5', 0),
('7df5246b-faa6-4bd6-bfd7-492b89c7cf28', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o31', 1),
('7e2ecf30-9353-48d4-b012-b21bcdd1a6be', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q24', NULL, 0),
('7ed5bb3b-9f77-43e4-a014-05cba84a0df8', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q8', NULL, 1),
('7f0eff36-cbd9-497d-90ee-149f7a349d2d', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q1', 'o1', 0),
('82811771-91ff-4bd7-a010-da66e6d2bcd0', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q8', NULL, 0),
('856619b3-4dd6-4253-ad71-806276ab009c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q17', NULL, 0),
('8a1158f7-e746-486d-99b8-877044f71a1b', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q17', 'o49', 0),
('8a3d0f73-cec1-4979-be33-d5b29f014188', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q12', NULL, 0),
('8c058ee3-89cf-4de0-9c0a-051156b45539', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q9', NULL, 0),
('8d1df555-672c-48c0-8185-87dd292a1fa8', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q18', 'o53', 0),
('900c0859-7344-410e-9667-331747f79594', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', NULL, 0),
('9126537c-0b97-423c-9ccc-b0493f17cdb3', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q10', NULL, 0),
('934e3eed-7d80-4505-bc9e-2963c0115d1c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('969a3e4f-8ecc-4b28-85f1-3051452d7c17', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 1),
('97b394f0-cf9f-4164-88a7-625ff2e9035a', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q7', 'o19', 0),
('9a3e746f-7988-47d6-a751-c10d1e5048a3', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 3),
('9a69bdd9-ed27-45b7-85f6-3ca7aaa67ea2', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q8', 'o22', 0),
('9acb95be-0aa4-4b4d-8196-3cfac10a6c51', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q7', NULL, 0),
('9ed8e5e9-7f72-403b-b0d1-a7336906bb13', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q2', 'o4', 0),
('9f2ed107-d32b-48c3-86d6-460a987425ac', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 3),
('a1ac2dc0-4a22-4ed4-b25a-3c76ee067d33', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q8', 'o22', 0),
('a3339561-da6b-47b5-8a8c-f02510ac916c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 0),
('a34c19a5-c322-485c-9bae-3dcd09f2d8ff', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('a442d14e-0c61-44b6-ac1f-fb749bfb4fe8', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q11', 'o32', 0),
('a9b3efb5-f522-4c1d-b729-bfab6b1d2d99', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o31', 0),
('aa549514-70ba-42ee-b095-677a955e53be', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', 'o34', 0),
('ab526882-d780-41cd-8fd0-0e0fcf3acc73', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 1),
('b45c7ded-b43f-4466-9b9b-0a69b72f9739', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q8', 'o22', 0),
('b5cd16cc-93d5-4078-8a82-9f0176bfadad', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 2),
('b73339d6-69f4-4532-954e-54fd1da00e5b', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q12', NULL, 0),
('b7e95027-0d8e-49ce-a00c-bd65c0dbf202', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q21', NULL, 0),
('b9854cb3-22ca-4ff8-b7d2-34b04becac97', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q2', 'o4', 0),
('bbb0c07c-f464-4bcd-92f1-5d054869b64c', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q17', NULL, 0),
('bf8f4a81-b370-4096-88ff-2bfe89e1a849', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q2', NULL, 0),
('c2fb5433-fd50-475e-8a34-4a96fd37f95a', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o33', 0),
('c41ed9ce-0201-4221-8700-61336a22aad6', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q11', 'o31', 0),
('c421f23f-7d5c-4187-adc6-7e64f093b339', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', 'o63', 0),
('c628766a-a8d2-4499-9411-0065842f5794', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 0),
('c6f77d96-ccc2-479b-8535-ae14a1d512db', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q11', NULL, 0),
('c79993d0-9dbb-4613-b647-7ca1a3007556', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q24', 'o73', 0),
('c7a8b096-f5ed-493d-8e36-b3f07940591f', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', NULL, 0),
('c95dbe90-3c8d-4856-8962-db62dfef9e06', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', NULL, 0),
('ca7b941d-f0de-4ada-b159-b0a572938850', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q18', 'o52', 0),
('cfd7081d-1e91-41b9-b911-18421bff675d', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', NULL, 2),
('d03cebe6-a39a-4c73-9163-e01a712422e6', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', NULL, 0),
('d0504b14-ced3-4037-a3f9-f33eaa6e095b', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q2', 'o4', 0),
('d6447982-48b3-4693-9ae1-b9073e5b0e80', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q17', 'o49', 0),
('dd0d32cc-a6fb-4579-81b0-bcbc960e2ba0', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', NULL, 2),
('dd1c9b45-6758-4b0d-a550-9c0d629c8422', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q7', NULL, 0),
('e117ebde-bbfe-4a05-bc3c-424e163adb6e', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q9', 'o25', 0),
('e170b263-fa00-484a-a7ec-ee1a2552ddb3', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q1', 'o1', 0),
('e1bcfced-c6b4-45fa-b84e-7e2e70bae7dd', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q21', NULL, 0),
('e71a7305-20df-4dbd-a121-cc575f4e4cb1', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', 'o32', 3),
('e884cab4-d505-4eaf-8c9a-39dc8d5dfa84', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q11', NULL, 0),
('e8fae07a-138e-4086-8a61-26113d105167', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q20', 'o58', 0),
('e9a24c06-f8ee-4d3d-a9a6-11a49bbc326a', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', 'o34', 0),
('ec899832-9a0d-441b-86b2-e343b99f1cd8', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q7', NULL, 1),
('ed33805f-18ad-4a38-92a3-82442f4e7668', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 3),
('ee043dc0-3c00-46a9-bfe8-c0790829a668', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', 'o34', 3),
('f5355ee0-fd10-4cb2-aab4-d452c5ba16bf', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q1', 'o1', 0),
('f631bc25-1360-470a-b5dd-d7cda969b91d', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q24', NULL, 0),
('f789215d-3292-4f16-978c-fd4c10e8fe22', NULL, '378e1954-1a85-458b-bfa1-d904070f1d58', 'q21', 'o63', 0),
('fe74fac0-4e4b-45ab-a9df-ed1187076088', NULL, '5877df58-ad78-4833-8b04-175e72b6e3db', 'q12', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `course_id` varchar(36) NOT NULL,
  `time_limit` int(11) DEFAULT NULL,
  `attempt_limit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assignments`
--

INSERT INTO `assignments` (`id`, `name`, `description`, `deadline`, `course_id`, `time_limit`, `attempt_limit`) VALUES
('02b378be-5802-4778-a1e4-8c968d244ff2', 'Network Exam', 'Test Network', '2024-08-28 08:15:00', 'c7d1e4f1-223b-4cdd-9f0e-0123456789ab', 10, 1),
('6f0fb09b-4f37-470e-b761-f301bab6cec3', 'Final Test', 'Basic Testing', '2024-08-30 02:13:00', 'c12d1e4f1-223b-4cdd-9f0e-0123456789a', 90, 1),
('a1d1e4f1-223b-4cdd-9f0e-0123456789ab', 'HTML Basics Assignment', 'Complete the HTML Basics quiz.', '2024-08-17 23:59:59', 'c1d1e4f1-223b-4cdd-9f0e-0123456789ab', NULL, NULL),
('a2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'CSS Fundamentals Assignment', 'Submit the CSS styling project.', '2024-08-18 23:59:59', 'c2d1e4f1-223b-4cdd-9f0e-0123456789ab', NULL, NULL),
('a3d1e4f1-223b-4cdd-9f0e-0123456789ab', 'JavaScript Introduction Assignment', 'Complete the JavaScript coding challenge.', '2024-08-19 23:59:59', 'c3d1e4f1-223b-4cdd-9f0e-0123456789ab', NULL, NULL),
('a4d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Cybersecurity Basics Assignment', 'Submit the cybersecurity essay.', '2024-08-20 23:59:59', 'c4d1e4f1-223b-4cdd-9f0e-0123456789ab', NULL, NULL),
('a5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Python Basics Assignment', 'Complete the Python Basics exercises.', '2024-08-21 23:59:59', 'c5d1e4f1-223b-4cdd-9f0e-0123456789ab', NULL, NULL),
('d6260941-64ad-48aa-9d2a-f96cb9a5bc3a', 'Machine Learning Exam', 'Test ML', '2024-08-29 06:53:00', 'c9d1e4f1-223b-4cdd-9f0e-0123456789ab', 1, 1),
('eae7ea31-1ad8-438b-894b-acd2aeb409a0', 'AI Exam', 'AI Test', '2024-08-28 09:32:00', 'c15d1e4f1-223b-4cdd-9f0e-0123456789a', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `instructor_id` varchar(36) NOT NULL,
  `sub_instructor_id` varchar(36) DEFAULT NULL,
  `assignment_id` varchar(36) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `level` enum('Beginner','Intermediate','Advanced','Expert') NOT NULL DEFAULT 'Beginner'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `description`, `instructor_id`, `sub_instructor_id`, `assignment_id`, `duration`, `image_url`, `level`) VALUES
('6823db1d-9492-4d7a-b946-214b4e6de79d', 'Azure', 'MS Azure', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, '3 months', 'https://res.cloudinary.com/duminopj4/image/upload/v1724932966/course_images/unqqkmw4afhi3gnbwtsd.jpg', 'Intermediate'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'Web Development Fundamentals', 'Learn how to build websites.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, '5 weeks', 'https://elearningindustry.com/wp-content/uploads/2021/03/shutterstock_745932934.png', 'Intermediate'),
('c11d1e4f1-223b-4cdd-9f0e-0123456789a', 'Cybersecurity Essentials', 'Understand the basics of cybersecurity.', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, '3 weeks', 'https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148919413.jpg', 'Beginner'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'Python for Data Science', 'Learn Python for data analysis and visualization.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, '8 weeks', NULL, 'Intermediate'),
('c13d1e4f1-223b-4cdd-9f0e-0123456789a', 'Database Management', 'Introduction to database concepts and SQL.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, '5 weeks', 'https://animationexplainers.com/wp-content/uploads/2022/04/Employee-Training.jpg', 'Beginner'),
('c14d1e4f1-223b-4cdd-9f0e-0123456789a', 'Cloud Computing Essentials', 'Understand cloud services and architecture.', '00e813f9-59f4-40aa-bd60-1825d7606314', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', NULL, '4 weeks', NULL, 'Advanced'),
('c15d1e4f1-223b-4cdd-9f0e-0123456789a', 'Artificial Intelligence', 'Explore AI concepts and applications.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', 'a2d1e4f1-223b-4cdd-9f0e-0123456789ab', '10 weeks', 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-team-work-business_516790-1332.jpg', 'Expert'),
('c1d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Introduction to Programming', 'Learn the basics of programming.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab', '4 weeks', NULL, 'Beginner'),
('c2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Digital Marketing Strategy', 'Learn to create effective digital marketing plans.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, NULL, '6 weeks', 'https://elearningindustry.com/wp-content/uploads/2021/03/shutterstock_745932934.png', 'Intermediate'),
('c3d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Blockchain Fundamentals', 'Introduction to blockchain technology and its uses.', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, '7 weeks', NULL, 'Beginner'),
('c4d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Cybersecurity Advanced Practices', 'Advanced cybersecurity techniques and strategies.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, '9 weeks', 'https://as2.ftcdn.net/v2/jpg/02/24/04/75/1000_F_224047592_T6VWHi0A74jGZogmE3faVK7dcmteIMvc.jpg', 'Advanced'),
('c5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Mobile App Development', 'Learn to develop mobile applications.', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', NULL, '8 weeks', NULL, 'Intermediate'),
('c6d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Project Management Essentials', 'Understand the basics of project management.', '00e813f9-59f4-40aa-bd60-1825d7606314', NULL, NULL, '5 weeks', 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-team-work-business_516790-1332.jpg', 'Beginner'),
('c7d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Advanced Networking', 'Deep dive into networking protocols and configurations.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, '10 weeks', NULL, 'Advanced'),
('c8d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Advanced Data Structures', 'Deep dive into data structures.', '00e813f9-59f4-40aa-bd60-1825d7606314', '123878ff-cd3d-4c94-aee3-cab0e0f6b27e', NULL, '6 weeks', 'https://t3.ftcdn.net/jpg/02/25/25/54/360_F_225255468_JIVcux271IOhuPqqrsRtvXeKmq5iu944.jpg', 'Advanced'),
('c9d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Machine Learning Techniques', 'Explore machine learning algorithms.', 'ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', NULL, NULL, '8 weeks', 'https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-team-work-business_516790-1332.jpg', 'Expert');

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` varchar(36) NOT NULL,
  `status` enum('Approved','Pending','Rejected') NOT NULL DEFAULT 'Pending',
  `done` tinyint(4) NOT NULL DEFAULT 0,
  `enrollment_date` datetime NOT NULL,
  `student_id` varchar(36) NOT NULL,
  `course_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enrollments`
--

INSERT INTO `enrollments` (`id`, `status`, `done`, `enrollment_date`, `student_id`, `course_id`) VALUES
('0111779e-3523-4ca9-8aa5-c85a8f110efe', 'Approved', 0, '2024-08-25 12:07:52', '54a859af-3995-441b-9537-695ae8215f7f', 'c8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('18f74b54-d822-4c02-a61f-9c6d6b54b598', 'Approved', 0, '2024-08-13 15:20:13', '7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'c9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('1f0c8b25-408f-44a7-be42-f3faf8f3e1d4', 'Pending', 0, '2024-08-26 12:41:27', '54a859af-3995-441b-9537-695ae8215f7f', 'c15d1e4f1-223b-4cdd-9f0e-0123456789a'),
('38761653-4531-42fe-9eab-5229fef1e398', 'Pending', 0, '2024-08-25 11:49:56', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c13d1e4f1-223b-4cdd-9f0e-0123456789a'),
('3f1904cd-86ac-4865-ac07-9c0db9c897d8', 'Approved', 0, '2024-08-13 15:20:20', '7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'c7d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('44f8f9c7-6339-4887-b3ef-852e1cc87657', 'Pending', 0, '2024-08-25 11:56:01', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('452cc0db-e6fb-4a40-b1ff-310c97702f66', 'Rejected', 0, '2024-08-12 14:16:24', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('5471386f-5b73-4362-a210-1604b69ee14b', 'Pending', 0, '2024-08-13 15:19:36', '7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'c12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('5b25e221-19b4-4382-b917-d0e600eeef7f', 'Approved', 0, '2024-08-13 09:53:22', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('67552926-1de0-4c5a-a93b-3dc50b307f03', 'Pending', 0, '2024-08-26 13:08:12', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('691ac922-dfc4-4b61-83df-7ac829e727d2', 'Pending', 0, '2024-08-25 11:47:34', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('6b8e4e63-54d0-4155-aa7d-66dd978df0ed', 'Pending', 0, '2024-08-25 11:58:39', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c13d1e4f1-223b-4cdd-9f0e-0123456789a'),
('77e21d0a-5183-4ef8-a9b7-e1d1c4c807f3', 'Pending', 0, '2024-08-27 14:22:27', '54a859af-3995-441b-9537-695ae8215f7f', 'c14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('794efc8e-bef1-47d2-9dcb-b74b8b3e31a3', 'Approved', 0, '2024-08-12 22:11:07', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c7d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('7d31121b-282d-42c7-892f-3cbfa6aa3e17', 'Approved', 0, '2024-08-12 14:26:29', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('8151e9dc-c6a5-4a04-8069-00f208a8b402', 'Pending', 0, '2024-08-13 15:14:26', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('8f1880b6-ace7-466c-b3a6-0f21b6f48193', 'Pending', 0, '2024-08-27 22:10:18', '33202650-2e46-47b8-990b-a00b30b1897a', 'c14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('928053be-243c-4b11-8e0a-904180f34b53', 'Approved', 0, '2024-08-13 00:32:14', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c7d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('95adf5a3-0dbf-4b95-b5a1-bc5fe46ed89a', 'Approved', 0, '2024-08-17 13:49:56', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('9785ef76-042e-46da-a409-a5bb472bd61f', 'Approved', 0, '2024-08-26 12:36:35', 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'c12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('9b375b0f-13ca-4652-8bbe-d3622d21ad32', 'Approved', 0, '2024-08-12 14:46:06', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('a661c75a-464a-4734-a573-3e1a25284809', 'Approved', 0, '2024-08-13 09:53:44', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('aaa005ee-247b-4169-ad10-a2b4c784f00c', 'Approved', 0, '2024-08-12 14:19:13', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('adcd720d-1ce5-48a7-9495-1290bfe5d035', 'Pending', 0, '2024-08-25 11:46:00', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('b361a649-f131-4a7f-983c-f047b3cafe02', 'Rejected', 0, '2024-08-13 15:19:51', '7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'c14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('b4bbec27-72c4-4286-8c4f-8dff42240773', 'Approved', 0, '2024-08-17 14:43:30', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('b5274f02-70d7-497d-91cd-76296ac70ede', 'Pending', 0, '2024-08-20 23:35:01', 'b6281679-02c0-4543-a7fb-210429105267', 'c4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('b6866f62-c5ff-486f-b685-f0706e21c673', 'Approved', 0, '2024-08-13 02:02:49', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c15d1e4f1-223b-4cdd-9f0e-0123456789a'),
('bf128894-d897-4986-bed1-88ed8f6b74b3', 'Approved', 0, '2024-08-13 00:27:52', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c185fa91-085c-4237-8a7f-6af1de9ef49b', 'Rejected', 0, '2024-08-26 13:27:15', '33202650-2e46-47b8-990b-a00b30b1897a', 'c15d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c32b3824-21d5-4321-acdc-9e2823cd2539', 'Approved', 0, '2024-08-12 14:22:31', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('d8a7deac-f26c-460f-911a-964072856ff5', 'Approved', 0, '2024-08-25 01:54:56', '8f2e6682-dc87-484f-929b-abac2e193963', 'c12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('dba4edc6-2236-4a27-9329-2c9ff603242e', 'Approved', 0, '2024-08-26 12:40:58', '54a859af-3995-441b-9537-695ae8215f7f', 'c12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('dc6a67fa-f3f4-4506-91c5-4d95be11c296', 'Approved', 0, '2024-08-13 09:53:35', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('e9cf4a52-51ed-4155-bb56-dcb6d0e5cfe2', 'Pending', 0, '2024-08-25 12:00:52', '378e1954-1a85-458b-bfa1-d904070f1d58', 'c10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('eae2fb1a-13f4-4b6f-88e7-bd1f490129c8', 'Rejected', 0, '2024-08-12 14:19:23', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('f23f5c32-803d-43a0-a452-64a74653b329', 'Approved', 0, '2024-08-14 13:17:36', '5877df58-ad78-4833-8b04-175e72b6e3db', 'c4d1e4f1-223b-4cdd-9f0e-0123456789ab');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` varchar(36) NOT NULL,
  `status` enum('Todo','Doing','Pass','Fail') NOT NULL DEFAULT 'Todo',
  `grade` float NOT NULL,
  `max_grade` float NOT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `assignment_id` varchar(36) NOT NULL,
  `student_id` varchar(36) NOT NULL,
  `start_time` datetime DEFAULT NULL,
  `submit_time` datetime DEFAULT NULL,
  `attempt` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `status`, `grade`, `max_grade`, `feedback`, `assignment_id`, `student_id`, `start_time`, `submit_time`, `attempt`) VALUES
('361d4c27-d0f2-4d8a-a13b-361b738e597e', 'Pass', 4, 5, '', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab', '5877df58-ad78-4833-8b04-175e72b6e3db', '2024-08-26 13:07:53', '2024-08-27 09:36:38', 2),
('4086af39-a9d0-404d-a230-596592fc6f74', 'Todo', 0, 5, NULL, 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab', '5877df58-ad78-4833-8b04-175e72b6e3db', NULL, NULL, 1),
('78f06ded-e109-46f8-96b8-3a417c978932', 'Todo', 0, 5, NULL, 'a5d1e4f1-223b-4cdd-9f0e-0123456789ab', '378e1954-1a85-458b-bfa1-d904070f1d58', NULL, NULL, 1),
('acb5f8dd-6a64-41db-9a31-574026be2ba6', 'Fail', 0, 5, '', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab', '5877df58-ad78-4833-8b04-175e72b6e3db', '2024-08-24 19:03:18', '2024-08-24 19:03:21', 1),
('f2074b50-8aa4-4aa8-9f54-75ba26a6853a', 'Todo', 0, 5, NULL, 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab', '378e1954-1a85-458b-bfa1-d904070f1d58', NULL, NULL, 1),
('ff24e725-d719-4e01-9292-a488c7e65a7e', 'Todo', 0, 5, NULL, 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab', '378e1954-1a85-458b-bfa1-d904070f1d58', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `lessons`
--

CREATE TABLE `lessons` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `study_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lessons`
--

INSERT INTO `lessons` (`id`, `title`, `content`, `file_url`, `study_time`) VALUES
('6565deb3-92f5-4e22-a12e-880b50371a6a', 'Intro', 'Intro', '', '2024-08-28 10:26:00'),
('b299da16-e0d5-420b-b2e8-899a9c9a02a3', 'My Lesson', 'Learn AI', '', '2024-08-22 08:00:00'),
('ba49e58b-ec0b-44d5-8dea-dfef8ed1027b', 'Lesson 2', 'Lesson 2', '', '2024-08-27 00:27:00'),
('l10d1e4f1-223b-4cdd-9f0e-0123456789a', 'Networking Basics', 'Learn about basic networking protocols.', 'https://example.com/networking_basics.pdf', '2024-08-21 09:00:00'),
('l11d1e4f1-223b-4cdd-9f0e-0123456789a', 'Advanced Data Structures', 'In-depth study of data structures.', 'https://example.com/advanced_data_structures.pdf', '2024-08-22 10:00:00'),
('l12d1e4f1-223b-4cdd-9f0e-0123456789a', 'Machine Learning Introduction', 'Basics of machine learning algorithms.', 'https://example.com/ml_intro.pdf', '2024-08-23 11:00:00'),
('l13d1e4f1-223b-4cdd-9f0e-0123456789a', 'Introduction to HTML', 'Learn the basics of HTML structure.', 'https://example.com/html-intro.pdf', '2024-08-01 09:00:00'),
('l14d1e4f1-223b-4cdd-9f0e-0123456789a', 'CSS Styling', 'Explore how to style HTML with CSS.', 'https://example.com/css-styling.pdf', '2024-08-02 10:00:00'),
('l15d1e4f1-223b-4cdd-9f0e-0123456789a', 'JavaScript Basics', 'Introduction to JavaScript programming.', 'https://example.com/js-basics.pdf', '2024-08-03 11:00:00'),
('l16d1e4f1-223b-4cdd-9f0e-0123456789a', 'Advanced CSS Techniques', 'Deep dive into advanced CSS.', 'https://example.com/css-advanced.pdf', '2024-08-04 12:00:00'),
('l17d1e4f1-223b-4cdd-9f0e-0123456789a', 'React.js Introduction', 'Learn the basics of React.js.', 'https://example.com/react-intro.pdf', '2024-08-05 13:00:00'),
('l18d1e4f1-223b-4cdd-9f0e-0123456789a', 'Node.js Fundamentals', 'Introduction to server-side programming with Node.js.', 'https://example.com/nodejs-fundamentals.pdf', '2024-08-06 14:00:00'),
('l19d1e4f1-223b-4cdd-9f0e-0123456789a', 'Database Design', 'Learn how to design relational databases.', 'https://example.com/database-design.pdf', '2024-08-07 15:00:00'),
('l1d1e4f1-223b-4cdd-9f0e-0123456789ab', 'HTML Basics', 'Introduction to HTML and its basic elements.', 'https://example.com/html_basics.pdf', '2024-08-12 09:00:00'),
('l20d1e4f1-223b-4cdd-9f0e-0123456789a', 'SQL Queries', 'Introduction to SQL queries for database interaction.', 'https://example.com/sql-queries.pdf', '2024-08-08 16:00:00'),
('l21d1e4f1-223b-4cdd-9f0e-0123456789a', 'Web Security Basics', 'Learn the fundamentals of web security.', 'https://example.com/web-security.pdf', '2024-08-09 17:00:00'),
('l22d1e4f1-223b-4cdd-9f0e-0123456789a', 'RESTful API Design', 'Introduction to designing RESTful APIs.', 'https://example.com/restful-api.pdf', '2024-08-10 18:00:00'),
('l23d1e4f1-223b-4cdd-9f0e-0123456789a', 'Git and Version Control', 'Learn the basics of Git for version control.', 'https://example.com/git-version-control.pdf', '2024-08-11 19:00:00'),
('l24d1e4f1-223b-4cdd-9f0e-0123456789a', 'Agile Methodologies', 'Understand Agile frameworks like Scrum and Kanban.', 'https://example.com/agile-methodologies.pdf', '2024-08-12 20:00:00'),
('l25d1e4f1-223b-4cdd-9f0e-0123456789a', 'Test-Driven Development', 'Learn the principles of Test-Driven Development (TDD).', 'https://example.com/tdd.pdf', '2024-08-13 21:00:00'),
('l26d1e4f1-223b-4cdd-9f0e-0123456789a', 'CI/CD Pipelines', 'Introduction to Continuous Integration and Continuous Deployment.', 'https://example.com/cicd-pipelines.pdf', '2024-08-14 22:00:00'),
('l27d1e4f1-223b-4cdd-9f0e-0123456789a', 'Cloud Deployment', 'Learn how to deploy applications to the cloud.', 'https://example.com/cloud-deployment.pdf', '2024-08-15 23:00:00'),
('l2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'CSS Fundamentals', 'Learn about CSS and how to style web pages.', 'https://example.com/css_fundamentals.pdf', '2024-08-13 10:00:00'),
('l3d1e4f1-223b-4cdd-9f0e-0123456789ab', 'JavaScript Introduction', 'Basic concepts of JavaScript for web development.', 'https://example.com/js_introduction.pdf', '2024-08-14 11:00:00'),
('l4d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Introduction to Cybersecurity', 'Overview of cybersecurity principles.', 'https://example.com/cybersecurity_intro.pdf', '2024-08-15 09:00:00'),
('l5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Python Basics', 'Learn Python programming basics.', 'https://res.cloudinary.com/duminopj4/image/upload/v1724322496/files/d7tao8ojnezh4zakgsm7.pdf', '2024-08-16 10:00:00'),
('l6d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Data Analysis with Python', 'Using Python for data analysis.', 'https://example.com/data_analysis_python.pdf', '2024-08-17 11:00:00'),
('l7d1e4f1-223b-4cdd-9f0e-0123456789ab', 'SQL Basics', 'Introduction to SQL and database management.', 'https://example.com/sql_basics.pdf', '2024-08-18 09:00:00'),
('l8d1e4f1-223b-4cdd-9f0e-0123456789ab', 'Cloud Computing Concepts', 'Learn about cloud services and architectures.', 'https://example.com/cloud_computing_concepts.pdf', '2024-08-19 10:00:00'),
('l9d1e4f1-223b-4cdd-9f0e-0123456789ab', 'AI Fundamentals', 'Introduction to AI concepts and techniques.', 'https://example.com/ai_fundamentals.pdf', '2024-08-20 11:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `lesson_course`
--

CREATE TABLE `lesson_course` (
  `course_id` varchar(36) NOT NULL,
  `lesson_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lesson_course`
--

INSERT INTO `lesson_course` (`course_id`, `lesson_id`) VALUES
('6823db1d-9492-4d7a-b946-214b4e6de79d', '6565deb3-92f5-4e22-a12e-880b50371a6a'),
('6823db1d-9492-4d7a-b946-214b4e6de79d', 'ba49e58b-ec0b-44d5-8dea-dfef8ed1027b'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'l13d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'l14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'l1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'l2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'l3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c10d1e4f1-223b-4cdd-9f0e-0123456789a', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c11d1e4f1-223b-4cdd-9f0e-0123456789a', 'l21d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c11d1e4f1-223b-4cdd-9f0e-0123456789a', 'l4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c11d1e4f1-223b-4cdd-9f0e-0123456789a', 'l8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'b299da16-e0d5-420b-b2e8-899a9c9a02a3'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l18d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l19d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c12d1e4f1-223b-4cdd-9f0e-0123456789a', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c13d1e4f1-223b-4cdd-9f0e-0123456789a', 'l11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c13d1e4f1-223b-4cdd-9f0e-0123456789a', 'l12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c13d1e4f1-223b-4cdd-9f0e-0123456789a', 'l20d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c13d1e4f1-223b-4cdd-9f0e-0123456789a', 'l7d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c14d1e4f1-223b-4cdd-9f0e-0123456789a', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c14d1e4f1-223b-4cdd-9f0e-0123456789a', 'l8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c15d1e4f1-223b-4cdd-9f0e-0123456789a', 'l17d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c15d1e4f1-223b-4cdd-9f0e-0123456789a', 'l25d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c15d1e4f1-223b-4cdd-9f0e-0123456789a', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c1d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c1d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l23d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l16d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c2d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c3d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l22d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c3d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c4d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l26d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c4d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l15d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l24d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c5d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c6d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l7d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c7d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c8d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('c9d1e4f1-223b-4cdd-9f0e-0123456789ab', 'l12d1e4f1-223b-4cdd-9f0e-0123456789a');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(3, 1721893879711, 'InitDatabase1721893879711'),
(9, 1722737566500, 'InsertUserData1722737566500'),
(13, 1722737899063, 'InsertCourseData1722737899063');

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `id` varchar(36) NOT NULL,
  `content` varchar(255) NOT NULL,
  `is_correct` tinyint(4) NOT NULL,
  `question_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `content`, `is_correct`, `question_id`) VALUES
('o1', 'Paris', 1, 'q1'),
('o10', 'Mars', 1, 'q4'),
('o11', 'Venus', 0, 'q4'),
('o12', 'Jupiter', 0, 'q4'),
('o13', 'Au', 1, 'q5'),
('o14', 'Ag', 0, 'q5'),
('o15', 'Fe', 0, 'q5'),
('o16', 'Leonardo da Vinci', 1, 'q6'),
('o17', 'Michelangelo', 0, 'q6'),
('o18', 'Raphael', 0, 'q6'),
('o19', 'Pacific Ocean', 1, 'q7'),
('o2', 'London', 0, 'q1'),
('o20', 'Atlantic Ocean', 0, 'q7'),
('o21', 'Indian Ocean', 0, 'q7'),
('o22', '1945', 1, 'q8'),
('o23', '1944', 0, 'q8'),
('o24', '1946', 0, 'q8'),
('o25', 'Tokyo', 1, 'q9'),
('o26', 'Kyoto', 0, 'q9'),
('o27', 'Osaka', 0, 'q9'),
('o28', 'Albert Einstein', 1, 'q10'),
('o29', 'Isaac Newton', 0, 'q10'),
('o3', 'Berlin', 0, 'q1'),
('o30', 'Niels Bohr', 0, 'q10'),
('o31', 'Jupiter', 1, 'q11'),
('o32', 'Saturn', 0, 'q11'),
('o33', 'Neptune', 0, 'q11'),
('o34', 'Harper Lee', 1, 'q12'),
('o35', 'F. Scott Fitzgerald', 0, 'q12'),
('o36', 'John Steinbeck', 0, 'q12'),
('o37', '8', 1, 'q13'),
('o38', '6', 0, 'q13'),
('o39', '10', 0, 'q13'),
('o4', 'William Shakespeare', 1, 'q2'),
('o40', 'Oxygen', 1, 'q14'),
('o41', 'Gold', 0, 'q14'),
('o42', 'Silver', 0, 'q14'),
('o43', '1789', 1, 'q15'),
('o44', '1776', 0, 'q15'),
('o45', '1804', 0, 'q15'),
('o46', 'Canberra', 1, 'q16'),
('o47', 'Sydney', 0, 'q16'),
('o48', 'Melbourne', 0, 'q16'),
('o49', 'Vincent van Gogh', 1, 'q17'),
('o5', 'Charles Dickens', 0, 'q2'),
('o50', 'Pablo Picasso', 0, 'q17'),
('o51', 'Claude Monet', 0, 'q17'),
('o52', 'Blue Whale', 1, 'q18'),
('o53', 'African Elephant', 0, 'q18'),
('o54', 'Giraffe', 0, 'q18'),
('o55', 'Nitrogen', 1, 'q19'),
('o56', 'Oxygen', 0, 'q19'),
('o57', 'Carbon Dioxide', 0, 'q19'),
('o58', 'Alexander Graham Bell', 1, 'q20'),
('o59', 'Thomas Edison', 0, 'q20'),
('o6', 'Jane Austen', 0, 'q2'),
('o60', 'Nikola Tesla', 0, 'q20'),
('o61', 'Red', 0, 'q21'),
('o62', 'Blue', 0, 'q21'),
('o63', 'Green', 1, 'q21'),
('o64', 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune', 1, 'q22'),
('o65', 'Venus, Earth, Mars, Mercury, Jupiter, Saturn, Uranus, Neptune', 0, 'q22'),
('o66', 'Mercury, Venus, Earth, Mars, Saturn, Jupiter, Uranus, Neptune', 0, 'q22'),
('o67', '2', 1, 'q23'),
('o68', '3', 1, 'q23'),
('o69', '4', 0, 'q23'),
('o7', '4', 1, 'q3'),
('o70', '5', 1, 'q23'),
('o71', '6', 0, 'q23'),
('o72', '7', 1, 'q23'),
('o73', 'World War I', 0, 'q24'),
('o74', 'Moon Landing', 0, 'q24'),
('o75', 'French Revolution', 0, 'q24'),
('o76', 'Fall of the Berlin Wall', 0, 'q24'),
('o77', 'Hydrogen - 1', 1, 'q25'),
('o78', 'Helium - 2', 1, 'q25'),
('o79', 'Carbon - 6', 1, 'q25'),
('o8', '3', 0, 'q3'),
('o80', 'Oxygen - 8', 1, 'q25'),
('o9', '5', 0, 'q3');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` varchar(36) NOT NULL,
  `content` varchar(255) NOT NULL,
  `assignment_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `content`, `assignment_id`) VALUES
('q1', 'What is the capital of France?', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q10', 'Who developed the theory of relativity?', 'a5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q11', 'What is the largest planet in our solar system?', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q12', 'Who wrote \"To Kill a Mockingbird\"?', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q13', 'What is the square root of 64?', 'a2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q14', 'Which element has the chemical symbol \"O\"?', 'a2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q15', 'In what year did the French Revolution begin?', 'a3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q16', 'What is the capital of Australia?', 'a3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q17', 'Who painted \"The Starry Night\"?', 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q18', 'What is the largest mammal on Earth?', 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q19', 'What is the main component of the Earth\'s atmosphere?', 'a5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q2', 'Who wrote \"Romeo and Juliet\"?', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q20', 'Who is credited with inventing the telephone?', 'a5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q21', 'Which of the following is NOT a primary color?', 'a1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q22', 'What is the correct order of planets from the Sun?', 'a2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q23', 'Select all prime numbers from the list:', 'a3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q24', 'Arrange the following events in chronological order:', 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q25', 'Match the element to its correct atomic number:', 'a5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q3', 'What is 2 + 2?', 'a2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q4', 'Which planet is known as the Red Planet?', 'a2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q5', 'What is the chemical symbol for gold?', 'a3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q6', 'Who painted the Mona Lisa?', 'a3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q7', 'What is the largest ocean on Earth?', 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q8', 'In which year did World War II end?', 'a4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('q9', 'What is the capital of Japan?', 'a5d1e4f1-223b-4cdd-9f0e-0123456789ab');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('-erpk7GKaGsX-JljHiRcka0KhCVT7_oB', 1724827917, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2024-08-28T04:13:55.561Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"flash\":{},\"user\":{\"id\":\"ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce\",\"googleId\":null,\"email\":\"zuanki@gmail.com\",\"hash_password\":\"$2b$10$dzOiO8hEwb/gjc4uPgaMWudDud43ta32ObURJP/WuWALjrk/CKYa2\",\"auth_type\":\"local\",\"username\":\"hoanx\",\"role\":\"Instructor\",\"name\":\"Nguyen Xuan Hoa\",\"phone\":\"0123456789\",\"about\":\"AI Engineer\",\"birthday\":\"2003-07-31\",\"avatar_url\":\"https://res.cloudinary.com/duminopj4/image/upload/v1724554351/avatars/ghbmb6q83mdbmmh6rhc6.jpg\",\"specialization\":\"AI Machine Learning\",\"authCode\":\"625962\",\"authCodeExpires\":\"2024-08-26T07:53:37.000Z\",\"isVerify\":true}}'),
('MWrOg7OWsz3B1vAXmbugqFXkhMotyIZm', 1724943809, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2024-08-29T15:01:56.984Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"flash\":{},\"user\":{\"id\":\"123878ff-cd3d-4c94-aee3-cab0e0f6b27e\",\"googleId\":null,\"email\":\"phamminhv@gmail.com\",\"hash_password\":\"$2b$10$WUum/TayekSCg7P2Guq69.aX02txwngO6Mfmo7uuMf6MdErhHjcwS\",\"auth_type\":\"local\",\"username\":\"pmv\",\"role\":\"Instructor\",\"name\":\"Pham Minh Vuong\",\"phone\":null,\"about\":\"Fullstack Engineer\",\"birthday\":null,\"avatar_url\":\"https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-789.jpg\",\"specialization\":\"Software Engineering\",\"authCode\":\"\",\"authCodeExpires\":\"2024-08-27T02:14:43.000Z\",\"isVerify\":true}}'),
('xWyv9l1844yXVvS0T71VF2oNg-uEvUBe', 1724833099, '{\"cookie\":{\"originalMaxAge\":10800000,\"expires\":\"2024-08-28T08:18:15.361Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"passport\":{\"user\":{\"id\":\"33202650-2e46-47b8-990b-a00b30b1897a\",\"googleId\":null,\"email\":\"21020425@vnu.edu.vn\",\"hash_password\":\"$2b$10$LpVhpxN860EUzFNOp1mtKu0XxjEjO4/ofqas/o.Spw3xvYhkslPi.\",\"auth_type\":\"local\",\"username\":\"pmv21020425\",\"role\":\"Student\",\"name\":\"Phạm Minh Vương\",\"phone\":null,\"about\":null,\"birthday\":null,\"avatar_url\":null,\"specialization\":\"None\",\"authCode\":null,\"authCodeExpires\":null,\"isVerify\":null}},\"user\":{\"id\":\"33202650-2e46-47b8-990b-a00b30b1897a\",\"googleId\":null,\"email\":\"21020425@vnu.edu.vn\",\"hash_password\":\"$2b$10$LpVhpxN860EUzFNOp1mtKu0XxjEjO4/ofqas/o.Spw3xvYhkslPi.\",\"auth_type\":\"local\",\"username\":\"pmv21020425\",\"role\":\"Student\",\"name\":\"Phạm Minh Vương\",\"phone\":\"\",\"about\":\"\",\"birthday\":null,\"avatar_url\":\"https://res.cloudinary.com/duminopj4/image/upload/v1724822294/avatars/rfeijbthorjtzjb67jjz.png\",\"specialization\":\"Software Engineering\",\"authCode\":null,\"authCodeExpires\":null,\"isVerify\":null},\"flash\":{}}');

-- --------------------------------------------------------

--
-- Table structure for table `student_lesson`
--

CREATE TABLE `student_lesson` (
  `id` varchar(36) NOT NULL,
  `done` tinyint(4) NOT NULL DEFAULT 0,
  `student_id` varchar(36) NOT NULL,
  `lesson_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_lesson`
--

INSERT INTO `student_lesson` (`id`, `done`, `student_id`, `lesson_id`) VALUES
('0181a588-e96d-432c-8ffa-ca702c7ce00e', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('0e97f617-f35b-4716-92d6-5ebf57c1126a', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('103aab3e-6a7b-471c-8153-927927227a1f', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('1273bea5-c0b3-4913-97b3-117a496ed3f5', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('248122d6-d0b8-4f91-8d0a-9580105edf38', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('29a79d69-c1dc-4753-9471-83a870397f3a', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('2fd173b0-68e3-4503-b30b-66fd06d9ee35', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l23d1e4f1-223b-4cdd-9f0e-0123456789a'),
('31323df8-864d-4629-88f0-cbd1cb10d5b7', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('387bf805-7202-4f3f-acb4-28166ccfcd88', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('3ac7674e-6f32-4a7c-8a9a-9c363695c2bc', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l15d1e4f1-223b-4cdd-9f0e-0123456789a'),
('408580d3-788e-4c45-943b-a06c2d17f8c6', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l19d1e4f1-223b-4cdd-9f0e-0123456789a'),
('41cf2cde-706c-44de-a122-6c8f665a8e6a', 0, '33202650-2e46-47b8-990b-a00b30b1897a', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('463d63ce-cfc3-42cf-9a65-56c43fb0635a', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l19d1e4f1-223b-4cdd-9f0e-0123456789a'),
('5187539c-1017-43d9-a59c-b2d95780e0ad', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l26d1e4f1-223b-4cdd-9f0e-0123456789a'),
('558965f8-dd29-48a7-b0a1-470a67c7b188', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'b299da16-e0d5-420b-b2e8-899a9c9a02a3'),
('57ee1775-af06-408f-a838-b3147428d809', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'b299da16-e0d5-420b-b2e8-899a9c9a02a3'),
('5a14e767-7e14-4e6c-a509-e4237a95c896', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('62dd9b51-583c-4722-b5b8-590abefd25e9', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('6602e96f-ced3-4a35-a3a0-c282c67831f8', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('691c5a11-6981-4d50-9523-291ab4cdcfd2', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('823ec545-4f34-492a-8f4b-72cc5acfab94', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l18d1e4f1-223b-4cdd-9f0e-0123456789a'),
('83900e0a-63e8-4aa2-9096-9fd3fc110239', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('8b73e96a-962c-4912-b35b-aa07243e792a', 0, '33202650-2e46-47b8-990b-a00b30b1897a', 'l25d1e4f1-223b-4cdd-9f0e-0123456789a'),
('8c02a383-6716-4df5-b2cb-1e22e729029e', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'b299da16-e0d5-420b-b2e8-899a9c9a02a3'),
('90faa06f-7e18-4180-8631-57873fce47fd', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('95fbeba1-de7b-4c7e-8a15-398d730a59aa', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l24d1e4f1-223b-4cdd-9f0e-0123456789a'),
('971ecd84-f1c9-467d-b5ed-254d50376ff6', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'b299da16-e0d5-420b-b2e8-899a9c9a02a3'),
('98631bbb-f03a-450b-acde-45bd535abb21', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('a3ac0d27-6b0a-4615-b091-8005b804ec0a', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l18d1e4f1-223b-4cdd-9f0e-0123456789a'),
('a61282a7-fb83-4cd6-9848-613e41a28791', 0, '7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('a6cc0ac1-14ba-4d3d-a7bc-66d25e3d1a91', 0, '7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'l12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('a6dfdcd4-836f-4288-8e6f-876ab74fb061', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l17d1e4f1-223b-4cdd-9f0e-0123456789a'),
('ad7e348e-5249-4f59-aeea-aaf1efa55cd1', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'b299da16-e0d5-420b-b2e8-899a9c9a02a3'),
('add6cda2-daf2-4236-8d1b-fa33db90843c', 0, '33202650-2e46-47b8-990b-a00b30b1897a', 'l17d1e4f1-223b-4cdd-9f0e-0123456789a'),
('ade96438-386e-48b5-9ff3-bdb8e36da565', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('b4595cf3-a105-4c12-9c64-78e767a0d8e7', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('b910ddd5-ded7-492d-86ab-05624012ccec', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l18d1e4f1-223b-4cdd-9f0e-0123456789a'),
('bd1955d7-075d-4cd0-9c39-cb348d2e1d44', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('c61a2537-30cf-4c61-b305-1c44fa0529fd', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('cc173c11-24de-44e9-bd2c-833b6741ce71', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('cc883549-be93-464f-beb5-f9a65e0e2118', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l19d1e4f1-223b-4cdd-9f0e-0123456789a'),
('d8261c48-bb44-4e6e-84c5-b0db7232d2da', 0, '33202650-2e46-47b8-990b-a00b30b1897a', 'l11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('d8de0cb8-95a4-450c-a5ff-2838c2d1dcbb', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('daa82a6c-2b02-481f-b5c7-83dc02163b1d', 1, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l25d1e4f1-223b-4cdd-9f0e-0123456789a'),
('de8fe016-bf70-40d5-808f-4a4bf14c4022', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('e3ce98f3-473f-4b30-a38e-6daad8eb31ec', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l17d1e4f1-223b-4cdd-9f0e-0123456789a'),
('e5ade084-6977-470f-8b76-e441b25ee41a', 0, '378e1954-1a85-458b-bfa1-d904070f1d58', 'l11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('e5fb0b20-929b-40d1-a066-b443911a4e21', 0, 'fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'l19d1e4f1-223b-4cdd-9f0e-0123456789a'),
('e9c53a78-2d86-4b6f-a4bf-7449f3e58573', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l25d1e4f1-223b-4cdd-9f0e-0123456789a'),
('f1339945-e702-4f36-9f6e-b46d1bc67164', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('f34e45dd-3b15-40e1-a4ba-a786423ec862', 0, '54a859af-3995-441b-9537-695ae8215f7f', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('ffb8c903-ab65-4290-819e-0f802fe26293', 0, '8f2e6682-dc87-484f-929b-abac2e193963', 'l18d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl10d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l10d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl11d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l11d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl12d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l12d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl1d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l1d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl21d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l13d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl22d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l14d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl23d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l15d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl24d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l16d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl25d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l17d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl26d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l18d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl27d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l19d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl28d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l20d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl29d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l21d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl2d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l2d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl30d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l22d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl31d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l23d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl32d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l24d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl33d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l25d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl34d1e4f1-223b-4cdd-9f0e-0123456789', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l26d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl35d1e4f1-223b-4cdd-9f0e-0123456789', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l27d1e4f1-223b-4cdd-9f0e-0123456789a'),
('sl3d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l3d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl4d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l4d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl5d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l5d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl6d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l6d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl7d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l7d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl8d1e4f1-223b-4cdd-9f0e-0123456789a', 1, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l8d1e4f1-223b-4cdd-9f0e-0123456789ab'),
('sl9d1e4f1-223b-4cdd-9f0e-0123456789a', 0, '5877df58-ad78-4833-8b04-175e72b6e3db', 'l9d1e4f1-223b-4cdd-9f0e-0123456789ab');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `email` varchar(255) NOT NULL,
  `hash_password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `role` enum('Admin','Instructor','Student','Pending Approval') NOT NULL DEFAULT 'Student',
  `name` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  `specialization` enum('Software Engineering','Data Science','Cyber Security','Networking','AI Machine Learning','None') NOT NULL DEFAULT 'None',
  `googleId` varchar(255) DEFAULT NULL,
  `auth_type` enum('local','google','facebook','github') NOT NULL DEFAULT 'local',
  `authCode` varchar(255) DEFAULT NULL,
  `authCodeExpires` datetime DEFAULT NULL,
  `isVerify` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `hash_password`, `username`, `role`, `name`, `birthday`, `avatar_url`, `phone`, `about`, `specialization`, `googleId`, `auth_type`, `authCode`, `authCodeExpires`, `isVerify`) VALUES
('00e813f9-59f4-40aa-bd60-1825d7606314', 'nguyen.quang.anh@sun-asterisk.com', '$2b$10$cBvpEOwiSgshDbkhyi1.h.chwJDUydU9eXXcU1rAAwuu4utoCSIqC', 'anhnq', 'Instructor', 'Nguyen Quang Anh', '2003-11-26', 'https://res.cloudinary.com/duminopj4/image/upload/v1723566594/avatars/j85gdmulf989lmwkbtjq.png', '0163456789', 'Data Engineer', 'Software Engineering', NULL, 'local', NULL, NULL, NULL),
('123878ff-cd3d-4c94-aee3-cab0e0f6b27e', 'phamminhv@gmail.com', '$2b$10$WUum/TayekSCg7P2Guq69.aX02txwngO6Mfmo7uuMf6MdErhHjcwS', 'pmv', 'Instructor', 'Pham Minh Vuong', NULL, 'https://img.freepik.com/premium-photo/teacher-man-avatar-icon-illustration-vector-style_131965-789.jpg', NULL, 'Fullstack Engineer', 'Software Engineering', NULL, 'local', '', '2024-08-27 09:14:43', 1),
('33202650-2e46-47b8-990b-a00b30b1897a', '21020425@vnu.edu.vn', '$2b$10$LpVhpxN860EUzFNOp1mtKu0XxjEjO4/ofqas/o.Spw3xvYhkslPi.', 'pmv21020425', 'Student', 'Phạm Minh Vương', NULL, 'https://res.cloudinary.com/duminopj4/image/upload/v1724822294/avatars/rfeijbthorjtzjb67jjz.png', '', '', 'Software Engineering', NULL, 'local', NULL, NULL, NULL),
('378e1954-1a85-458b-bfa1-d904070f1d58', 'pham.thi.hong.ngan@sun-asterisk.com', '$2b$10$icM9rab8qK4mTumhXFIhMOGVay16oCHZkArBfWnXhpJ4H/z9NhaWK', 'nganpth', 'Student', 'Pham Thi Hong Ngan', NULL, NULL, NULL, NULL, '', NULL, 'local', NULL, NULL, NULL),
('531fcba4-b7cd-45da-8ec3-184b8e88e949', 'admin@sun-asterisk.com', '$2b$10$DjxAkWALpyHKWtdxyxCwYO4l5ZF7jyRcRTBr56OOruPLelb8El.cy', 'admin', 'Admin', 'Admin', NULL, 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg', NULL, 'Administrator of the e-learning system', '', NULL, 'local', '389810', '2024-08-26 14:55:26', 1),
('54a859af-3995-441b-9537-695ae8215f7f', 'pham.minh.vuong@sun-asterisk.com', '$2b$10$BLbF9caDi4vwDoamEtdRJu.3P8eDhwDXlZrq3j8LBHvuA2nsezIjm', 'Pham', 'Student', 'Pham Minh Vuong', NULL, 'https://lh3.googleusercontent.com/a/ACg8ocJztVisEp1b8SQ9_VFa8bLrr--dY2A8g_LAaq2LG49HWZdbtw=s96-c', NULL, NULL, '', '101793049225580013760', 'google', NULL, NULL, NULL),
('5877df58-ad78-4833-8b04-175e72b6e3db', 'phamminhvuong@sun-asterisk.com', '$2b$10$WG07nnnu2oTuocMBH.j99.GUsqMfsgtPvyQExBp3pFivu.VaeZlzG', 'vuongpm-0516', 'Student', 'Phạm Minh Vương', '2003-07-11', 'https://res.cloudinary.com/duminopj4/image/upload/v1723599243/avatars/wuw6y3cvthh3nj5t8itm.png', '0365011703', '', 'Software Engineering', NULL, 'local', '443580', '2024-08-26 17:32:40', 1),
('66aea26c-394a-4cd0-bfe7-4237b7391c35', 'phamminhv26@gmail.com', '$2b$10$RIdSCKHxfUFeEePhflqJKOr8HWdP954mctkx5JkUPZNC8pfrmFDTm', 'NewInstructor', 'Instructor', 'Nguyen Xuan Hoa', NULL, NULL, NULL, '', 'Software Engineering', NULL, 'local', '', '2024-08-27 09:43:27', 1),
('7b1719e9-338a-4f8e-a8e3-918c8f9663c3', 'cao.thi.phuong.anh@sun-asterisk.com', '$2b$10$8Am90XB9ErV./evmEAvlgubarZXfz1euBTqUuIsXrxu.5vZ6Vyosm', 'anhctp', 'Student', 'Cao Thi Phuong Anh', NULL, NULL, NULL, NULL, '', NULL, 'local', NULL, NULL, NULL),
('8f2e6682-dc87-484f-929b-abac2e193963', 'pmv@vnu.edu.vn', '$2b$10$omQrH5lNMvwvpzt1kWKVC.8YsUOb/BYIb6LRrmnKfJh/Pra1Z..P2', '21020425', 'Student', '21020425 Phạm Minh Vương', NULL, 'https://lh3.googleusercontent.com/a/ACg8ocJpyghwyPptuWuJyOY6dbmZZ3jysRGpFEtN-tapQpbfIQYRPIYv=s96-c', NULL, NULL, '', '107661232468707080560', 'google', NULL, NULL, NULL),
('ad11ffa9-f4b0-4e8b-bbf0-e0f16c3854ce', 'zuanki@gmail.com', '$2b$10$dzOiO8hEwb/gjc4uPgaMWudDud43ta32ObURJP/WuWALjrk/CKYa2', 'hoanx', 'Instructor', 'Nguyen Xuan Hoa', '2003-07-31', 'https://res.cloudinary.com/duminopj4/image/upload/v1724554351/avatars/ghbmb6q83mdbmmh6rhc6.jpg', '0123456789', 'AI Engineer', 'AI Machine Learning', NULL, 'local', '625962', '2024-08-26 14:53:37', 1),
('b6281679-02c0-4543-a7fb-210429105267', 'harry@gmail.com', '$2b$10$4vkwdob2tienYniKNc3AiOQbf7.evvwc7H9LH4StoNVAkGy3r5ulK', 'kane', 'Student', 'Harry Kane', NULL, NULL, NULL, NULL, '', NULL, 'local', NULL, NULL, NULL),
('fc8ebe65-85b5-4a05-a13e-7ee5307ec67a', 'phamminh@gmail.com', '$2b$10$tn0ShXtn5sNOwpRdtGOkwOfnlGN1rnHhyiEqC8B/syFKrIv7Yf.Yi', 'minhvuong', 'Pending Approval', 'Pham Minh Vuong', NULL, NULL, NULL, '', 'Cyber Security', NULL, 'local', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5599e6557440fcc9a843e62b99b` (`student_id`),
  ADD KEY `FK_677120094cf6d3f12df0b9dc5d3` (`question_id`),
  ADD KEY `FK_67e979b8942acc80137116b6f12` (`option_id`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `REL_33f833f305070d2d4e6305d8a0` (`course_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `REL_53507595a85e67bfa5c8206799` (`assignment_id`),
  ADD KEY `FK_4fdc83dd6b261101401ec259342` (`instructor_id`),
  ADD KEY `FK_3d51c7bc0a2aa26907d7b0e4a51` (`sub_instructor_id`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_307813fe255896d6ebf3e6cd55c` (`student_id`),
  ADD KEY `FK_b79d0bf01779fdf9cfb6b092af3` (`course_id`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_361ad24212a796fb219e19b3f08` (`assignment_id`),
  ADD KEY `FK_9acca493883cee3b9e8f9e01cd1` (`student_id`);

--
-- Indexes for table `lessons`
--
ALTER TABLE `lessons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lesson_course`
--
ALTER TABLE `lesson_course`
  ADD PRIMARY KEY (`course_id`,`lesson_id`),
  ADD KEY `IDX_42a784f3dab0ad201b5d4bb33a` (`course_id`),
  ADD KEY `IDX_24723c8385d4fb37f5492757b1` (`lesson_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2bdd03245b8cb040130fe16f21d` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_fd156d20b66a5f26eed9cac60dc` (`assignment_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `student_lesson`
--
ALTER TABLE `student_lesson`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ee05e947a4876f2cb6f20e5ad37` (`student_id`),
  ADD KEY `FK_1b1e669a97eabf06df2012766b9` (`lesson_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD UNIQUE KEY `IDX_fe0bb3f6520ee0469504521e71` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `FK_5599e6557440fcc9a843e62b99b` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_677120094cf6d3f12df0b9dc5d3` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_67e979b8942acc80137116b6f12` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `assignments`
--
ALTER TABLE `assignments`
  ADD CONSTRAINT `FK_33f833f305070d2d4e6305d8a0c` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `FK_3d51c7bc0a2aa26907d7b0e4a51` FOREIGN KEY (`sub_instructor_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4fdc83dd6b261101401ec259342` FOREIGN KEY (`instructor_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_53507595a85e67bfa5c8206799a` FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD CONSTRAINT `FK_307813fe255896d6ebf3e6cd55c` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b79d0bf01779fdf9cfb6b092af3` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `FK_361ad24212a796fb219e19b3f08` FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_9acca493883cee3b9e8f9e01cd1` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `lesson_course`
--
ALTER TABLE `lesson_course`
  ADD CONSTRAINT `FK_24723c8385d4fb37f5492757b1a` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_42a784f3dab0ad201b5d4bb33a5` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `FK_2bdd03245b8cb040130fe16f21d` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `FK_fd156d20b66a5f26eed9cac60dc` FOREIGN KEY (`assignment_id`) REFERENCES `assignments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `student_lesson`
--
ALTER TABLE `student_lesson`
  ADD CONSTRAINT `FK_1b1e669a97eabf06df2012766b9` FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ee05e947a4876f2cb6f20e5ad37` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;
