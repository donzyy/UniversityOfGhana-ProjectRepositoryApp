﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UniversityRepositoryApi.DatabaseContext;

namespace UniversityRepositoryApi.Migrations
{
    [DbContext(typeof(UGRepoContext))]
    [Migration("20231021035747_FourthMigration")]
    partial class FourthMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("UniversityRepositoryApi.Model.CourseCode", b =>
                {
                    b.Property<int>("Course_Code_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Course_Code_Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Course_Code_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Course_Code_ID");

                    b.ToTable("CourseCodes");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Department", b =>
                {
                    b.Property<int>("Department_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Department_Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Department_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Department_ID");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.DepartmentCourseCodeSupervisor", b =>
                {
                    b.Property<int>("Department_CourseCode_Supervisor_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Course_Code_ID")
                        .HasColumnType("int");

                    b.Property<int?>("Department_ID")
                        .HasColumnType("int");

                    b.Property<int?>("Supervisor_ID")
                        .HasColumnType("int");

                    b.HasKey("Department_CourseCode_Supervisor_ID");

                    b.HasIndex("Course_Code_ID");

                    b.HasIndex("Department_ID");

                    b.HasIndex("Supervisor_ID");

                    b.ToTable("DepartmentCourseCodeSupervisors");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Login", b =>
                {
                    b.Property<int>("Login_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Login_Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Login_Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Login_ID");

                    b.ToTable("Logins");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Project", b =>
                {
                    b.Property<int>("Project_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Project_Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Project_Status")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Project_Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Project_ID");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.ProjectReview", b =>
                {
                    b.Property<int>("Project_Review_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Project_Review_Comment")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Project_Review_Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("Project_Review_Rating")
                        .HasColumnType("int");

                    b.HasKey("Project_Review_ID");

                    b.ToTable("ProjectReviews");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.ProjectSubmitted", b =>
                {
                    b.Property<int>("Project_Submitted_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Project_Submitted_Time")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Student_ID")
                        .HasColumnType("int");

                    b.HasKey("Project_Submitted_ID");

                    b.HasIndex("Student_ID");

                    b.ToTable("ProjectSubmitteds");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.ProjectUpload", b =>
                {
                    b.Property<int>("Project_Upload_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Project_Upload_File_Path")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Project_Upload_ID");

                    b.ToTable("ProjectUploads");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Student", b =>
                {
                    b.Property<int>("Student_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date_Of_Birth")
                        .HasColumnType("datetime2");

                    b.Property<string>("First_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Last_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Middle_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Student_Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Student_Telephone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Student_ID");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.StudentSubmission", b =>
                {
                    b.Property<int>("Student_Submission_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Date_Submitted")
                        .HasColumnType("datetime2");

                    b.Property<int?>("Department_CourseCode_Supervisor_ID")
                        .HasColumnType("int");

                    b.Property<string>("First_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Last_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Middle_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Project_Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Project_File_Path")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Project_Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Student_Contact")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Student_Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Student_ID")
                        .HasColumnType("int");

                    b.HasKey("Student_Submission_ID");

                    b.HasIndex("Department_CourseCode_Supervisor_ID");

                    b.ToTable("StudentSubmissions");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Supervisor", b =>
                {
                    b.Property<int>("Supervisor_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("First_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Last_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Supervisor_ID");

                    b.ToTable("Supervisors");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Users", b =>
                {
                    b.Property<int>("User_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("User_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("User_Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("User_Role")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("User_ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.DepartmentCourseCodeSupervisor", b =>
                {
                    b.HasOne("UniversityRepositoryApi.Model.CourseCode", "CourseCode")
                        .WithMany("DepartmentCourseCodeSupervisors")
                        .HasForeignKey("Course_Code_ID");

                    b.HasOne("UniversityRepositoryApi.Model.Department", "Department")
                        .WithMany("DepartmentCourseCodeSupervisors")
                        .HasForeignKey("Department_ID");

                    b.HasOne("UniversityRepositoryApi.Model.Supervisor", "Supervisor")
                        .WithMany("DepartmentCourseCodeSupervisors")
                        .HasForeignKey("Supervisor_ID");

                    b.Navigation("CourseCode");

                    b.Navigation("Department");

                    b.Navigation("Supervisor");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.ProjectSubmitted", b =>
                {
                    b.HasOne("UniversityRepositoryApi.Model.Student", "Student")
                        .WithMany()
                        .HasForeignKey("Student_ID");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.StudentSubmission", b =>
                {
                    b.HasOne("UniversityRepositoryApi.Model.DepartmentCourseCodeSupervisor", "DepartmentCourseCodeSupervisor")
                        .WithMany("StudentSubmissions")
                        .HasForeignKey("Department_CourseCode_Supervisor_ID");

                    b.Navigation("DepartmentCourseCodeSupervisor");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.CourseCode", b =>
                {
                    b.Navigation("DepartmentCourseCodeSupervisors");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Department", b =>
                {
                    b.Navigation("DepartmentCourseCodeSupervisors");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.DepartmentCourseCodeSupervisor", b =>
                {
                    b.Navigation("StudentSubmissions");
                });

            modelBuilder.Entity("UniversityRepositoryApi.Model.Supervisor", b =>
                {
                    b.Navigation("DepartmentCourseCodeSupervisors");
                });
#pragma warning restore 612, 618
        }
    }
}
