using DocumentsWebAPI.Models;
using DocumentsWebAPI.Models.Employees;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using static DocumentsWebAPI.Models.Employees.EmployeeBindingModels;

namespace DocumentsWebAPI.Services
{
    public class EmployeeServices
    {

        public void AddEmployee(RegisterBindingModel data)
        {
            using (var conn = GetConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.Employees_Insert";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Email", data.Email);
                cmd.Parameters.AddWithValue("@DepartmentName", data.DepartmentName);
                cmd.Parameters.AddWithValue("@FirstName", data.FirstName);
                cmd.Parameters.AddWithValue("@LastName", data.LastName);
                cmd.Parameters.AddWithValue("@Position", data.Position);
                cmd.Parameters.AddWithValue("@isApprover", data.isApprover);
                cmd.Parameters.AddWithValue("@CompanyName", data.CompanyName);
                cmd.ExecuteNonQuery();
            }
        }
        public void SelectEmployeeByEmail(ref UserInfoViewModel data)
        {
            using (var conn = GetConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.Employees_Select_By_Email";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Email", data.Email);
                cmd.ExecuteNonQuery();

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        data.EmployeeId = (int)reader["Id"];
                        data.DepartmentId = (int)reader["DepartmentId"];
                        data.FirstName = (string)reader["FirstName"];
                        data.LastName = (string)reader["LastName"];
                        data.Position = (string)reader["Position"];
                        data.DepartmentName = (string)reader["DepartmentName"];
                        data.isApprover = (bool)reader["isApprover"];
                        data.CompanyName = (string)reader["CompanyName"];
                    }
                    return;
                }
            }
        }


            private SqlConnection GetConnection()
            {
                var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);
                conn.Open();
                return conn;
            }

        }
    }