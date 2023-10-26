using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class FifthMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions");

            migrationBuilder.AlterColumn<int>(
                name: "Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                column: "Department_CourseCode_Supervisor_ID",
                principalTable: "DepartmentCourseCodeSupervisors",
                principalColumn: "Department_CourseCode_Supervisor_ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions");

            migrationBuilder.AlterColumn<int>(
                name: "Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_StudentSubmissions_DepartmentCourseCodeSupervisors_Department_CourseCode_Supervisor_ID",
                table: "StudentSubmissions",
                column: "Department_CourseCode_Supervisor_ID",
                principalTable: "DepartmentCourseCodeSupervisors",
                principalColumn: "Department_CourseCode_Supervisor_ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
