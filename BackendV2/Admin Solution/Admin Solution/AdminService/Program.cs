
using AdminService.Models;
using Steeltoe.Discovery.Client;
using System.Text.Json.Serialization;

namespace AdminService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddDiscoveryClient(builder.Configuration);

            
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

            builder.Services.AddDbContext<P15EcollegeportalContext>();
            var app = builder.Build();


            app.UseDiscoveryClient();

           
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //app.UseHttpsRedirection();

            // For React App

            app.UseCors(x => x
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .SetIsOriginAllowed(origin => true)
                  .AllowCredentials());

            // ADD Cors
            //builder.Services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowLocalhost3000",
            //        builder => builder.WithOrigins("http://localhost:3000")
            //                            .AllowAnyHeader()
            //                            .AllowAnyMethod());
            //});



  

            //app.UseCors("AllowReactApp");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
