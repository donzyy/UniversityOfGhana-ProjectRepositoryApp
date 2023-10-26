using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CourseCodes",
                columns: table => new
                {
                    Course_Code_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Course_Code_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Course_Code_Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseCodes", x => x.Course_Code_ID);
                });

            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Department_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Department_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Department_Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Department_ID);
                });

            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    Login_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Login_Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Login_Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.Login_ID);
                });

            migrationBuilder.CreateTable(
                name: "ProjectUploads",
                columns: table => new
                {
                    Project_Upload_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Project_Upload_File_Path = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectUploads", x => x.Project_Upload_ID);
                });

            migrationBuilder.CreateTable(
                name: "Supervisors",
                columns: table => new
                {
                    Supervisor_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    First_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Last_Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Supervisors", x => x.Supervisor_ID);
                });

            migrationBuilder.CreateTable(
                name: "DepartmentCourseCodeSupervisors",
                columns: table => new
                {
                    Department_CourseCode_Supervisor_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Department_ID = table.Column<int>(type: "int", nullable: true),
                    Course_Code_ID = table.Column<int>(type: "int", nullable: true),
                    Supervisor_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentCourseCodeSupervisors", x => x.Department_CourseCode_Supervisor_ID);
                    table.ForeignKey(
                        name: "FK_DepartmentCourseCodeSupervisors_CourseCodes_Course_Code_ID",
                        column: x => x.Course_Code_ID,
                        principalTable: "CourseCodes",
                        principalColumn: "Course_Code_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DepartmentCourseCodeSupervisors_Departments_Department_ID",
                        column: x => x.Department_ID,
                        principalTable: "Departments",
                        principalColumn: "Department_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DepartmentCourseCodeSupervisors_Supervisors_Supervisor_ID",
                        column: x => x.Supervisor_ID,
                        principalTable: "Supervisors",
                        principalColumn: "Supervisor_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Student_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    First_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Last_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Middle_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date_Of_Birth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Student_Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Student_Telephone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Department_ID = table.Column<int>(type: "int", nullable: true),
                    Supervisor_ID = table.Column<int>(type: "int", nullable: true),
                    Project_ID = table.Column<int>(type: "int", nullable: true),
                    Course_Code_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Student_ID);
                    table.ForeignKey(
                        name: "FK_Students_CourseCodes_Course_Code_ID",
                        column: x => x.Course_Code_ID,
                        principalTable: "CourseCodes",
                        principalColumn: "Course_Code_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Students_Departments_Department_ID",
                        column: x => x.Department_ID,
                        principalTable: "Departments",
                        principalColumn: "Department_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Students_Supervisors_Supervisor_ID",
                        column: x => x.Supervisor_ID,
                        principalTable: "Supervisors",
                        principalColumn: "Supervisor_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProjectSubmitteds",
                columns: table => new
                {
                    Project_Submitted_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Project_Submitted_Time = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Student_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectSubmitteds", x => x.Project_Submitted_ID);
                    table.ForeignKey(
                        name: "FK_ProjectSubmitteds_Students_Student_ID",
                        column: x => x.Student_ID,
                        principalTable: "Students",
                        principalColumn: "Student_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProjectReviews",
                columns: table => new
                {
                    Project_Review_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Project_Review_Rating = table.Column<int>(type: "int", nullable: false),
                    Project_Review_Comment = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Project_Review_Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Project_Submitted_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectReviews", x => x.Project_Review_ID);
                    table.ForeignKey(
                        name: "FK_ProjectReviews_ProjectSubmitteds_Project_Submitted_ID",
                        column: x => x.Project_Submitted_ID,
                        principalTable: "ProjectSubmitteds",
                        principalColumn: "Project_Submitted_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Project_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Project_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Project_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Project_Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Project_Submitted_ID = table.Column<int>(type: "int", nullable: true),
                    Project_Upload_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Project_ID);
                    table.ForeignKey(
                        name: "FK_Projects_ProjectSubmitteds_Project_Submitted_ID",
                        column: x => x.Project_Submitted_ID,
                        principalTable: "ProjectSubmitteds",
                        principalColumn: "Project_Submitted_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Projects_ProjectUploads_Project_Upload_ID",
                        column: x => x.Project_Upload_ID,
                        principalTable: "ProjectUploads",
                        principalColumn: "Project_Upload_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentCourseCodeSupervisors_Course_Code_ID",
                table: "DepartmentCourseCodeSupervisors",
                column: "Course_Code_ID");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentCourseCodeSupervisors_Department_ID",
                table: "DepartmentCourseCodeSupervisors",
                column: "Department_ID");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentCourseCodeSupervisors_Supervisor_ID",
                table: "DepartmentCourseCodeSupervisors",
                column: "Supervisor_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectReviews_Project_Submitted_ID",
                table: "ProjectReviews",
                column: "Project_Submitted_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_Project_Submitted_ID",
                table: "Projects",
                column: "Project_Submitted_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_Project_Upload_ID",
                table: "Projects",
                column: "Project_Upload_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectSubmitteds_Student_ID",
                table: "ProjectSubmitteds",
                column: "Student_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Students_Course_Code_ID",
                table: "Students",
                column: "Course_Code_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Students_Department_ID",
                table: "Students",
                column: "Department_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Students_Project_ID",
                table: "Students",
                column: "Project_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Students_Supervisor_ID",
                table: "Students",
                column: "Supervisor_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Projects_Project_ID",
                table: "Students",
                column: "Project_ID",
                principalTable: "Projects",
                principalColumn: "Project_ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Students_CourseCodes_Course_Code_ID",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_Departments_Department_ID",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_Supervisors_Supervisor_ID",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_ProjectSubmitteds_Project_Submitted_ID",
                table: "Projects");

            migrationBuilder.DropTable(
                name: "DepartmentCourseCodeSupervisors");

            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.DropTable(
                name: "ProjectReviews");

            migrationBuilder.DropTable(
                name: "CourseCodes");

            migrationBuilder.DropTable(
                name: "Departments");

            migrationBuilder.DropTable(
                name: "Supervisors");

            migrationBuilder.DropTable(
                name: "ProjectSubmitteds");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "ProjectUploads");
        }
    }
}
