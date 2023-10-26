using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class SixthMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions");

            migrationBuilder.DropIndex(
                name: "IX_StudentSubmissions_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions");

            migrationBuilder.RenameColumn(
                name: "Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                newName: "Supervisor_Value");

            migrationBuilder.AddColumn<int>(
                name: "CourseCode_Value",
                table: "StudentSubmissions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Department_Value",
                table: "StudentSubmissions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CourseCode_Value",
                table: "StudentSubmissions");

            migrationBuilder.DropColumn(
                name: "Department_Value",
                table: "StudentSubmissions");

            migrationBuilder.RenameColumn(
                name: "Supervisor_Value",
                table: "StudentSubmissions",
                newName: "Department_CourseCode_Supervisor_ID");

            migrationBuilder.CreateIndex(
                name: "IX_StudentSubmissions_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                column: "Department_CourseCode_Supervisor_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                column: "Department_CourseCode_Supervisor_ID",
                principalTable: "DepartmentCourseCodeSupervisors",
                principalColumn: "Department_CourseCode_Supervisor_ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
