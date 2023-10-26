using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class NinthMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Project_Upload_File_Path",
                table: "ProjectUploads",
                newName: "Project_Upload_File_Name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Project_Upload_File_Name",
                table: "ProjectUploads",
                newName: "Project_Upload_File_Path");
        }
    }
}
