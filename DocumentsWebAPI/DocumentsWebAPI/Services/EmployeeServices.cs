using DocumentsWebAPI.Models.Employees;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace DocumentsWebAPI.Services
{
    public class EmployeeServices
    {

        public int AddEmployee(AddEmployee data)
        {
            using (var conn = GetConnection())
            {
                var cmd = conn.CreateCommand();
                cmd.CommandText = "dbo.Employees_Insert";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@UserName", data.UserName);
                cmd.Parameters.AddWithValue("@DepartmentName", data.DepartmentName);
                cmd.Parameters.AddWithValue("@FirstName", data.FirstName);
                cmd.Parameters.AddWithValue("@LastName", data.LastName);
                cmd.Parameters.AddWithValue("@Position", data.Position);
                cmd.Parameters.AddWithValue("@FirstName", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();
                return (int)cmd.Parameters["@Id"].Value;
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