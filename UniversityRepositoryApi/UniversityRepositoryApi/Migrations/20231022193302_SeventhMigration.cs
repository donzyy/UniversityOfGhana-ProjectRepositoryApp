using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class SeventhMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Project_File_Path",
                table: "StudentSubmissions");

            migrationBuilder.AddColumn<int>(
                name: "Student_ID",
                table: "ProjectUploads",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Student_ID",
                table: "ProjectUploads");

            migrationBuilder.AddColumn<string>(
                name: "Project_File_Path",
                table: "StudentSubmissions",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
