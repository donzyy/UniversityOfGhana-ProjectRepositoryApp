using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class ThirdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StudentSubmissions",
                columns: table => new
                {
                    Student_Submission_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Student_ID = table.Column<int>(type: "int", nullable: false),
                    Student_Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Student_Contact = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    First_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Middle_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Last_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date_Submitted = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Project_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Project_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Project_File_Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Department_CourseCode_Supervisor_ID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentSubmissions", x => x.Student_Submission_ID);
                    table.ForeignKey(
                        name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                        column: x => x.Department_CourseCode_Supervisor_ID,
                        principalTable: "DepartmentCourseCodeSupervisors",
                        principalColumn: "Department_CourseCode_Supervisor_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudentSubmissions_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                column: "Department_CourseCode_Supervisor_ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentSubmissions");
        }
    }
}
