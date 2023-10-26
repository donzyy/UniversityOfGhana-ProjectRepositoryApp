using Microsoft.EntityFrameworkCore.Migrations;

namespace UniversityRepositoryApi.Migrations
{
    public partial class FourthMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectReviews_ProjectSubmitteds_Project_Submitted_ID",
                table: "ProjectReviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_ProjectSubmitteds_Project_Submitted_ID",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_ProjectUploads_Project_Upload_ID",
                table: "Projects");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_CourseCodes_Course_Code_ID",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_Departments_Department_ID",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_Projects_Project_ID",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_Supervisors_Supervisor_ID",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Students_Course_Code_ID",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Students_Department_ID",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Students_Project_ID",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Students_Supervisor_ID",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Projects_Project_Submitted_ID",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_Project_Upload_ID",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_ProjectReviews_Project_Submitted_ID",
                table: "ProjectReviews");

            migrationBuilder.DropColumn(
                name: "Course_Code_ID",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Department_ID",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Project_ID",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Supervisor_ID",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "Project_Submitted_ID",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Project_Upload_ID",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Project_Submitted_ID",
                table: "ProjectReviews");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Course_Code_ID",
                table: "Students",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Department_ID",
                table: "Students",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Project_ID",
                table: "Students",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Supervisor_ID",
                table: "Students",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Project_Submitted_ID",
                table: "Projects",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Project_Upload_ID",
                table: "Projects",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Project_Submitted_ID",
                table: "ProjectReviews",
                type: "int",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_Projects_Project_Submitted_ID",
                table: "Projects",
                column: "Project_Submitted_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_Project_Upload_ID",
                table: "Projects",
                column: "Project_Upload_ID");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectReviews_Project_Submitted_ID",
                table: "ProjectReviews",
                column: "Project_Submitted_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectReviews_ProjectSubmitteds_Project_Submitted_ID",
                table: "ProjectReviews",
                column: "Project_Submitted_ID",
                principalTable: "ProjectSubmitteds",
                principalColumn: "Project_Submitted_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_ProjectSubmitteds_Project_Submitted_ID",
                table: "Projects",
                column: "Project_Submitted_ID",
                principalTable: "ProjectSubmitteds",
                principalColumn: "Project_Submitted_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_ProjectUploads_Project_Upload_ID",
                table: "Projects",
                column: "Project_Upload_ID",
                principalTable: "ProjectUploads",
                principalColumn: "Project_Upload_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_CourseCodes_Course_Code_ID",
                table: "Students",
                column: "Course_Code_ID",
                principalTable: "CourseCodes",
                principalColumn: "Course_Code_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Departments_Department_ID",
                table: "Students",
                column: "Department_ID",
                principalTable: "Departments",
                principalColumn: "Department_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Projects_Project_ID",
                table: "Students",
                column: "Project_ID",
                principalTable: "Projects",
                principalColumn: "Project_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Students_Supervisors_Supervisor_ID",
                table: "Students",
                column: "Supervisor_ID",
                principalTable: "Supervisors",
                principalColumn: "Supervisor_ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
