IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [CourseCodes] (
        [Course_Code_ID] int NOT NULL IDENTITY,
        [Course_Code_Name] nvarchar(max) NULL,
        [Course_Code_Description] nvarchar(max) NULL,
        CONSTRAINT [PK_CourseCodes] PRIMARY KEY ([Course_Code_ID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [Departments] (
        [Department_ID] int NOT NULL IDENTITY,
        [Department_Name] nvarchar(max) NULL,
        [Department_Description] nvarchar(max) NULL,
        CONSTRAINT [PK_Departments] PRIMARY KEY ([Department_ID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [Logins] (
        [Login_ID] int NOT NULL IDENTITY,
        [Login_Email] nvarchar(max) NULL,
        [Login_Password] nvarchar(max) NULL,
        CONSTRAINT [PK_Logins] PRIMARY KEY ([Login_ID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [ProjectUploads] (
        [Project_Upload_ID] int NOT NULL IDENTITY,
        [Project_Upload_File_Path] nvarchar(max) NULL,
        CONSTRAINT [PK_ProjectUploads] PRIMARY KEY ([Project_Upload_ID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [Supervisors] (
        [Supervisor_ID] int NOT NULL IDENTITY,
        [First_Name] nvarchar(max) NULL,
        [Last_Name] nvarchar(max) NULL,
        CONSTRAINT [PK_Supervisors] PRIMARY KEY ([Supervisor_ID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [DepartmentCourseCodeSupervisors] (
        [Department_CourseCode_Supervisor_ID] int NOT NULL IDENTITY,
        [Department_ID] int NULL,
        [Course_Code_ID] int NULL,
        [Supervisor_ID] int NULL,
        CONSTRAINT [PK_DepartmentCourseCodeSupervisors] PRIMARY KEY ([Department_CourseCode_Supervisor_ID]),
        CONSTRAINT [FK_DepartmentCourseCodeSupervisors_CourseCodes_Course_Code_ID] FOREIGN KEY ([Course_Code_ID]) REFERENCES [CourseCodes] ([Course_Code_ID]) ON DELETE NO ACTION,
        CONSTRAINT [FK_DepartmentCourseCodeSupervisors_Departments_Department_ID] FOREIGN KEY ([Department_ID]) REFERENCES [Departments] ([Department_ID]) ON DELETE NO ACTION,
        CONSTRAINT [FK_DepartmentCourseCodeSupervisors_Supervisors_Supervisor_ID] FOREIGN KEY ([Supervisor_ID]) REFERENCES [Supervisors] ([Supervisor_ID]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [Students] (
        [Student_ID] int NOT NULL IDENTITY,
        [First_Name] nvarchar(max) NULL,
        [Last_Name] nvarchar(max) NULL,
        [Middle_Name] nvarchar(max) NULL,
        [Gender] nvarchar(max) NULL,
        [Date_Of_Birth] datetime2 NOT NULL,
        [Student_Email] nvarchar(max) NULL,
        [Student_Telephone] nvarchar(max) NULL,
        [Department_ID] int NULL,
        [Supervisor_ID] int NULL,
        [Project_ID] int NULL,
        [Course_Code_ID] int NULL,
        CONSTRAINT [PK_Students] PRIMARY KEY ([Student_ID]),
        CONSTRAINT [FK_Students_CourseCodes_Course_Code_ID] FOREIGN KEY ([Course_Code_ID]) REFERENCES [CourseCodes] ([Course_Code_ID]) ON DELETE NO ACTION,
        CONSTRAINT [FK_Students_Departments_Department_ID] FOREIGN KEY ([Department_ID]) REFERENCES [Departments] ([Department_ID]) ON DELETE NO ACTION,
        CONSTRAINT [FK_Students_Supervisors_Supervisor_ID] FOREIGN KEY ([Supervisor_ID]) REFERENCES [Supervisors] ([Supervisor_ID]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [ProjectSubmitteds] (
        [Project_Submitted_ID] int NOT NULL IDENTITY,
        [Project_Submitted_Time] datetime2 NOT NULL,
        [Student_ID] int NULL,
        CONSTRAINT [PK_ProjectSubmitteds] PRIMARY KEY ([Project_Submitted_ID]),
        CONSTRAINT [FK_ProjectSubmitteds_Students_Student_ID] FOREIGN KEY ([Student_ID]) REFERENCES [Students] ([Student_ID]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [ProjectReviews] (
        [Project_Review_ID] int NOT NULL IDENTITY,
        [Project_Review_Rating] int NOT NULL,
        [Project_Review_Comment] nvarchar(max) NULL,
        [Project_Review_Date] datetime2 NOT NULL,
        [Project_Submitted_ID] int NULL,
        CONSTRAINT [PK_ProjectReviews] PRIMARY KEY ([Project_Review_ID]),
        CONSTRAINT [FK_ProjectReviews_ProjectSubmitteds_Project_Submitted_ID] FOREIGN KEY ([Project_Submitted_ID]) REFERENCES [ProjectSubmitteds] ([Project_Submitted_ID]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE TABLE [Projects] (
        [Project_ID] int NOT NULL IDENTITY,
        [Project_Title] nvarchar(max) NULL,
        [Project_Description] nvarchar(max) NULL,
        [Project_Status] nvarchar(max) NULL,
        [Project_Submitted_ID] int NULL,
        [Project_Upload_ID] int NULL,
        CONSTRAINT [PK_Projects] PRIMARY KEY ([Project_ID]),
        CONSTRAINT [FK_Projects_ProjectSubmitteds_Project_Submitted_ID] FOREIGN KEY ([Project_Submitted_ID]) REFERENCES [ProjectSubmitteds] ([Project_Submitted_ID]) ON DELETE NO ACTION,
        CONSTRAINT [FK_Projects_ProjectUploads_Project_Upload_ID] FOREIGN KEY ([Project_Upload_ID]) REFERENCES [ProjectUploads] ([Project_Upload_ID]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_DepartmentCourseCodeSupervisors_Course_Code_ID] ON [DepartmentCourseCodeSupervisors] ([Course_Code_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_DepartmentCourseCodeSupervisors_Department_ID] ON [DepartmentCourseCodeSupervisors] ([Department_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_DepartmentCourseCodeSupervisors_Supervisor_ID] ON [DepartmentCourseCodeSupervisors] ([Supervisor_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_ProjectReviews_Project_Submitted_ID] ON [ProjectReviews] ([Project_Submitted_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_Projects_Project_Submitted_ID] ON [Projects] ([Project_Submitted_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_Projects_Project_Upload_ID] ON [Projects] ([Project_Upload_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_ProjectSubmitteds_Student_ID] ON [ProjectSubmitteds] ([Student_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_Students_Course_Code_ID] ON [Students] ([Course_Code_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_Students_Department_ID] ON [Students] ([Department_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_Students_Project_ID] ON [Students] ([Project_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    CREATE INDEX [IX_Students_Supervisor_ID] ON [Students] ([Supervisor_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    ALTER TABLE [Students] ADD CONSTRAINT [FK_Students_Projects_Project_ID] FOREIGN KEY ([Project_ID]) REFERENCES [Projects] ([Project_ID]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231010213812_InitialMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231010213812_InitialMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231014195117_SecondMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231014195117_SecondMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231014195849_SecondAttemptToMigration')
BEGIN
    CREATE TABLE [Users] (
        [User_ID] int NOT NULL IDENTITY,
        [User_Name] nvarchar(max) NULL,
        [User_Role] nvarchar(max) NULL,
        [User_Password] nvarchar(max) NULL,
        CONSTRAINT [PK_Users] PRIMARY KEY ([User_ID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231014195849_SecondAttemptToMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231014195849_SecondAttemptToMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231020211725_ThirdMigration')
BEGIN
    CREATE TABLE [StudentSubmissions] (
        [Student_Submission_ID] int NOT NULL IDENTITY,
        [Student_ID] int NOT NULL,
        [Student_Email] nvarchar(max) NULL,
        [Student_Contact] nvarchar(max) NULL,
        [First_Name] nvarchar(max) NULL,
        [Middle_Name] nvarchar(max) NULL,
        [Last_Name] nvarchar(max) NULL,
        [Date_Submitted] datetime2 NOT NULL,
        [Project_Title] nvarchar(max) NULL,
        [Project_Description] nvarchar(max) NULL,
        [Project_File_Path] nvarchar(max) NULL,
        [Department_CourseCode_Supervisor_ID] int NULL,
        CONSTRAINT [PK_StudentSubmissions] PRIMARY KEY ([Student_Submission_ID]),
        CONSTRAINT [FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID] FOREIGN KEY ([Department_CourseCode_Supervisor_ID]) REFERENCES [DepartmentCourseCodeSupervisors] ([Department_CourseCode_Supervisor_ID]) ON DELETE NO ACTION
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231020211725_ThirdMigration')
BEGIN
    CREATE INDEX [IX_StudentSubmissions_Department_CourseCode_Supervisor_ID] ON [StudentSubmissions] ([Department_CourseCode_Supervisor_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231020211725_ThirdMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231020211725_ThirdMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [ProjectReviews] DROP CONSTRAINT [FK_ProjectReviews_ProjectSubmitteds_Project_Submitted_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [Projects] DROP CONSTRAINT [FK_Projects_ProjectSubmitteds_Project_Submitted_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [Projects] DROP CONSTRAINT [FK_Projects_ProjectUploads_Project_Upload_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [Students] DROP CONSTRAINT [FK_Students_CourseCodes_Course_Code_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [Students] DROP CONSTRAINT [FK_Students_Departments_Department_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [Students] DROP CONSTRAINT [FK_Students_Projects_Project_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    ALTER TABLE [Students] DROP CONSTRAINT [FK_Students_Supervisors_Supervisor_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_Students_Course_Code_ID] ON [Students];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_Students_Department_ID] ON [Students];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_Students_Project_ID] ON [Students];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_Students_Supervisor_ID] ON [Students];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_Projects_Project_Submitted_ID] ON [Projects];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_Projects_Project_Upload_ID] ON [Projects];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DROP INDEX [IX_ProjectReviews_Project_Submitted_ID] ON [ProjectReviews];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Students]') AND [c].[name] = N'Course_Code_ID');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Students] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [Students] DROP COLUMN [Course_Code_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var1 sysname;
    SELECT @var1 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Students]') AND [c].[name] = N'Department_ID');
    IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Students] DROP CONSTRAINT [' + @var1 + '];');
    ALTER TABLE [Students] DROP COLUMN [Department_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var2 sysname;
    SELECT @var2 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Students]') AND [c].[name] = N'Project_ID');
    IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [Students] DROP CONSTRAINT [' + @var2 + '];');
    ALTER TABLE [Students] DROP COLUMN [Project_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var3 sysname;
    SELECT @var3 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Students]') AND [c].[name] = N'Supervisor_ID');
    IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [Students] DROP CONSTRAINT [' + @var3 + '];');
    ALTER TABLE [Students] DROP COLUMN [Supervisor_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var4 sysname;
    SELECT @var4 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Projects]') AND [c].[name] = N'Project_Submitted_ID');
    IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [Projects] DROP CONSTRAINT [' + @var4 + '];');
    ALTER TABLE [Projects] DROP COLUMN [Project_Submitted_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var5 sysname;
    SELECT @var5 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Projects]') AND [c].[name] = N'Project_Upload_ID');
    IF @var5 IS NOT NULL EXEC(N'ALTER TABLE [Projects] DROP CONSTRAINT [' + @var5 + '];');
    ALTER TABLE [Projects] DROP COLUMN [Project_Upload_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    DECLARE @var6 sysname;
    SELECT @var6 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[ProjectReviews]') AND [c].[name] = N'Project_Submitted_ID');
    IF @var6 IS NOT NULL EXEC(N'ALTER TABLE [ProjectReviews] DROP CONSTRAINT [' + @var6 + '];');
    ALTER TABLE [ProjectReviews] DROP COLUMN [Project_Submitted_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021035747_FourthMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231021035747_FourthMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021051523_FifthMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] DROP CONSTRAINT [FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021051523_FifthMigration')
BEGIN
    DROP INDEX [IX_StudentSubmissions_Department_CourseCode_Supervisor_ID] ON [StudentSubmissions];
    DECLARE @var7 sysname;
    SELECT @var7 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[StudentSubmissions]') AND [c].[name] = N'Department_CourseCode_Supervisor_ID');
    IF @var7 IS NOT NULL EXEC(N'ALTER TABLE [StudentSubmissions] DROP CONSTRAINT [' + @var7 + '];');
    ALTER TABLE [StudentSubmissions] ALTER COLUMN [Department_CourseCode_Supervisor_ID] int NOT NULL;
    ALTER TABLE [StudentSubmissions] ADD DEFAULT 0 FOR [Department_CourseCode_Supervisor_ID];
    CREATE INDEX [IX_StudentSubmissions_Department_CourseCode_Supervisor_ID] ON [StudentSubmissions] ([Department_CourseCode_Supervisor_ID]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021051523_FifthMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] ADD CONSTRAINT [FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID] FOREIGN KEY ([Department_CourseCode_Supervisor_ID]) REFERENCES [DepartmentCourseCodeSupervisors] ([Department_CourseCode_Supervisor_ID]) ON DELETE CASCADE;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231021051523_FifthMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231021051523_FifthMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022175150_SixthMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] DROP CONSTRAINT [FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022175150_SixthMigration')
BEGIN
    DROP INDEX [IX_StudentSubmissions_Department_CourseCode_Supervisor_ID] ON [StudentSubmissions];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022175150_SixthMigration')
BEGIN
    EXEC sp_rename N'[StudentSubmissions].[Department_CourseCode_Supervisor_ID]', N'Supervisor_Value', N'COLUMN';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022175150_SixthMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] ADD [CourseCode_Value] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022175150_SixthMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] ADD [Department_Value] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022175150_SixthMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231022175150_SixthMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022193302_SeventhMigration')
BEGIN
    DECLARE @var8 sysname;
    SELECT @var8 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[StudentSubmissions]') AND [c].[name] = N'Project_File_Path');
    IF @var8 IS NOT NULL EXEC(N'ALTER TABLE [StudentSubmissions] DROP CONSTRAINT [' + @var8 + '];');
    ALTER TABLE [StudentSubmissions] DROP COLUMN [Project_File_Path];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022193302_SeventhMigration')
BEGIN
    ALTER TABLE [ProjectUploads] ADD [Student_ID] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022193302_SeventhMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231022193302_SeventhMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022193545_EightMigration')
BEGIN
    DECLARE @var9 sysname;
    SELECT @var9 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[StudentSubmissions]') AND [c].[name] = N'Date_Submitted');
    IF @var9 IS NOT NULL EXEC(N'ALTER TABLE [StudentSubmissions] DROP CONSTRAINT [' + @var9 + '];');
    ALTER TABLE [StudentSubmissions] DROP COLUMN [Date_Submitted];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231022193545_EightMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231022193545_EightMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231023143238_NinthMigration')
BEGIN
    EXEC sp_rename N'[ProjectUploads].[Project_Upload_File_Path]', N'Project_Upload_File_Name', N'COLUMN';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231023143238_NinthMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231023143238_NinthMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231023172055_TenthMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231023172055_TenthMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231023204222_ElevenghtMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] ADD [Project_File_Name] nvarchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231023204222_ElevenghtMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231023204222_ElevenghtMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231024234730_twelvethMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] ADD [Submission_Date] datetime2 NOT NULL DEFAULT '0001-01-01T00:00:00.0000000';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231024234730_twelvethMigration')
BEGIN
    ALTER TABLE [StudentSubmissions] ADD [Submission_Status] nvarchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231024234730_twelvethMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231024234730_twelvethMigration', N'5.0.17');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20231025202504_thirteenthMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20231025202504_thirteenthMigration', N'5.0.17');
END;
GO

COMMIT;
GO

