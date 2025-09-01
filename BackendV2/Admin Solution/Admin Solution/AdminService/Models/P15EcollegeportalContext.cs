using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace AdminService.Models;

public partial class P15EcollegeportalContext : DbContext
{
    public P15EcollegeportalContext()
    {
    }

    public P15EcollegeportalContext(DbContextOptions<P15EcollegeportalContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Announcement> Announcements { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<CourseEnrollment> CourseEnrollments { get; set; }

    public virtual DbSet<CourseMaterial> CourseMaterials { get; set; }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<EventRegistration> EventRegistrations { get; set; }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<PlacementApplication> PlacementApplications { get; set; }

    public virtual DbSet<PlacementDatum> PlacementData { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Staff> Staff { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=Onkar@178;database=p15_ecollegeportal", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.42-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Announcement>(entity =>
        {
            entity.HasKey(e => e.NoticeId).HasName("PRIMARY");

            entity.ToTable("announcement");

            entity.Property(e => e.NoticeId).HasColumnName("notice_id");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.ExpiryDate)
                .HasMaxLength(6)
                .HasColumnName("expiry_date");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PRIMARY");

            entity.ToTable("city");

            entity.HasIndex(e => new { e.CityName, e.StateName }, "city_unique").IsUnique();

            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.CityName).HasColumnName("city_name");
            entity.Property(e => e.StateName).HasColumnName("state_name");
        });

        modelBuilder.Entity<Course>(entity =>
        {
            entity.HasKey(e => e.CourseId).HasName("PRIMARY");

            entity.ToTable("course");

            entity.HasIndex(e => e.StaffId, "fk_course_staff");

            entity.Property(e => e.CourseId).HasColumnName("course_id");
            entity.Property(e => e.CourseName)
                .HasMaxLength(255)
                .HasColumnName("course_name");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.EndDate)
                .HasColumnType("datetime")
                .HasColumnName("end_date");
            entity.Property(e => e.StaffId).HasColumnName("staff_id");
            entity.Property(e => e.StartDate)
                .HasColumnType("datetime")
                .HasColumnName("start_date");

            entity.HasOne(d => d.Staff).WithMany(p => p.Courses)
                .HasForeignKey(d => d.StaffId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("fk_course_staff");
        });

        modelBuilder.Entity<CourseEnrollment>(entity =>
        {
            entity.HasKey(e => e.EnrollId).HasName("PRIMARY");

            entity.ToTable("course_enrollment");

            entity.HasIndex(e => e.CourseId, "course_id");

            entity.HasIndex(e => e.Sid, "sid");

            entity.Property(e => e.EnrollId).HasColumnName("enroll_id");
            entity.Property(e => e.CourseId).HasColumnName("course_id");
            entity.Property(e => e.EndDate)
                .HasColumnType("datetime")
                .HasColumnName("end_date");
            entity.Property(e => e.Sid)
                .HasMaxLength(20)
                .HasColumnName("sid");
            entity.Property(e => e.StartDate)
                .HasColumnType("datetime")
                .HasColumnName("start_date");
            entity.Property(e => e.Target)
                .HasMaxLength(20)
                .HasColumnName("target");

            entity.HasOne(d => d.Course).WithMany(p => p.CourseEnrollments)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("course_enrollment_ibfk_1");

            entity.HasOne(d => d.SidNavigation).WithMany(p => p.CourseEnrollments)
                .HasForeignKey(d => d.Sid)
                .HasConstraintName("course_enrollment_ibfk_2");
        });

        modelBuilder.Entity<CourseMaterial>(entity =>
        {
            entity.HasKey(e => e.MaterialId).HasName("PRIMARY");

            entity.ToTable("course_material");

            entity.HasIndex(e => e.CourseId, "course_id");

            entity.Property(e => e.MaterialId).HasColumnName("material_id");
            entity.Property(e => e.CourseId).HasColumnName("course_id");
            entity.Property(e => e.Notes).HasColumnName("notes");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.UploadedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("datetime")
                .HasColumnName("uploaded_at");
            entity.Property(e => e.Videos).HasColumnName("videos");

            entity.HasOne(d => d.Course).WithMany(p => p.CourseMaterials)
                .HasForeignKey(d => d.CourseId)
                .HasConstraintName("course_material_ibfk_1");
        });

        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.EventId).HasName("PRIMARY");

            entity.ToTable("event");

            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.DateTime)
                .HasColumnType("datetime")
                .HasColumnName("date_time");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.EventName)
                .HasMaxLength(255)
                .HasColumnName("event_name");
        });

        modelBuilder.Entity<EventRegistration>(entity =>
        {
            entity.HasKey(e => e.RegId).HasName("PRIMARY");

            entity.ToTable("event_registration");

            entity.HasIndex(e => e.EventId, "event_id");

            entity.HasIndex(e => e.Sid, "sid");

            entity.Property(e => e.RegId).HasColumnName("reg_id");
            entity.Property(e => e.EventId).HasColumnName("event_id");
            entity.Property(e => e.Sid)
                .HasMaxLength(20)
                .HasColumnName("sid");

            entity.HasOne(d => d.Event).WithMany(p => p.EventRegistrations)
                .HasForeignKey(d => d.EventId)
                .HasConstraintName("event_registration_ibfk_1");

            entity.HasOne(d => d.SidNavigation).WithMany(p => p.EventRegistrations)
                .HasForeignKey(d => d.Sid)
                .HasConstraintName("event_registration_ibfk_2");
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.ReviewId).HasName("PRIMARY");

            entity.ToTable("feedback");

            entity.HasIndex(e => e.Sid, "sid");

            entity.Property(e => e.ReviewId).HasColumnName("review_id");
            entity.Property(e => e.Comments)
                .HasMaxLength(255)
                .HasColumnName("comments");
            entity.Property(e => e.FeedbackType)
                .HasMaxLength(255)
                .HasColumnName("feedback_type");
            entity.Property(e => e.Rating).HasColumnName("rating");
            entity.Property(e => e.Sid)
                .HasMaxLength(20)
                .HasColumnName("sid");

            entity.HasOne(d => d.SidNavigation).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.Sid)
                .HasConstraintName("feedback_ibfk_1");
        });

        modelBuilder.Entity<PlacementApplication>(entity =>
        {
            entity.HasKey(e => e.ApplicationId).HasName("PRIMARY");

            entity.ToTable("placement_application");

            entity.HasIndex(e => e.OpportunityId, "opportunity_id");

            entity.HasIndex(e => e.Sid, "sid");

            entity.Property(e => e.ApplicationId).HasColumnName("application_id");
            entity.Property(e => e.OpportunityId).HasColumnName("opportunity_id");
            entity.Property(e => e.Resume).HasColumnName("resume");
            entity.Property(e => e.Sid)
                .HasMaxLength(20)
                .HasColumnName("sid");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .HasColumnName("status");

            entity.HasOne(d => d.Opportunity).WithMany(p => p.PlacementApplications)
                .HasForeignKey(d => d.OpportunityId)
                .HasConstraintName("placement_application_ibfk_1");

            entity.HasOne(d => d.SidNavigation).WithMany(p => p.PlacementApplications)
                .HasForeignKey(d => d.Sid)
                .HasConstraintName("placement_application_ibfk_2");
        });

        modelBuilder.Entity<PlacementDatum>(entity =>
        {
            entity.HasKey(e => e.OpportunityId).HasName("PRIMARY");

            entity.ToTable("placement_data");

            entity.Property(e => e.OpportunityId).HasColumnName("opportunity_id");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(255)
                .HasColumnName("company_name");
            entity.Property(e => e.Deadline)
                .HasColumnType("datetime")
                .HasColumnName("deadline");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .HasColumnName("title");
            entity.Property(e => e.Type)
                .HasMaxLength(255)
                .HasColumnName("type");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Rid).HasName("PRIMARY");

            entity.ToTable("role");

            entity.HasIndex(e => e.Rname, "rname").IsUnique();

            entity.Property(e => e.Rid).HasColumnName("rid");
            entity.Property(e => e.Rname).HasColumnName("rname");
        });

        modelBuilder.Entity<Staff>(entity =>
        {
            entity.HasKey(e => e.StaffId).HasName("PRIMARY");

            entity.ToTable("staff");

            entity.HasIndex(e => e.CityId, "city_id");

            entity.HasIndex(e => e.Uid, "uid");

            entity.Property(e => e.StaffId).HasColumnName("staff_id");
            entity.Property(e => e.AddressLine1)
                .HasMaxLength(50)
                .HasColumnName("address_line1");
            entity.Property(e => e.AddressLine2)
                .HasMaxLength(200)
                .HasColumnName("address_line2");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.Designation)
                .HasMaxLength(200)
                .HasColumnName("designation");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .HasColumnName("first_name");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .HasColumnName("last_name");
            entity.Property(e => e.Uid).HasColumnName("uid");

            entity.HasOne(d => d.City).WithMany(p => p.Staff)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("staff_ibfk_2");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.Staff)
                .HasForeignKey(d => d.Uid)
                .HasConstraintName("staff_ibfk_1");
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.HasKey(e => e.Sid).HasName("PRIMARY");

            entity.ToTable("student");

            entity.HasIndex(e => e.CityId, "city_id");

            entity.HasIndex(e => e.Uid, "uid");

            entity.Property(e => e.Sid)
                .HasMaxLength(20)
                .HasColumnName("sid");
            entity.Property(e => e.AddressLine1)
                .HasMaxLength(200)
                .HasColumnName("address_line1");
            entity.Property(e => e.AddressLine2)
                .HasMaxLength(200)
                .HasColumnName("address_line2");
            entity.Property(e => e.CityId).HasColumnName("city_id");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .HasColumnName("first_name");
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .HasColumnName("last_name");
            entity.Property(e => e.Uid).HasColumnName("uid");

            entity.HasOne(d => d.City).WithMany(p => p.Students)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("student_ibfk_2");

            entity.HasOne(d => d.UidNavigation).WithMany(p => p.Students)
                .HasForeignKey(d => d.Uid)
                .HasConstraintName("student_ibfk_1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Uid).HasName("PRIMARY");

            entity.ToTable("user");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.PhoneNo, "phone_no").IsUnique();

            entity.HasIndex(e => e.Rid, "rid");

            entity.HasIndex(e => e.Uname, "uname").IsUnique();

            entity.Property(e => e.Uid).HasColumnName("uid");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .HasColumnName("password");
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(20)
                .HasColumnName("phone_no");
            entity.Property(e => e.Rid).HasColumnName("rid");
            entity.Property(e => e.Uname).HasColumnName("uname");

            entity.HasOne(d => d.RidNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.Rid)
                .HasConstraintName("user_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
