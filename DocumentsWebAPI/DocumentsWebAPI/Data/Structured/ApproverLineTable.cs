using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static DocumentsWebAPI.Models.Forms.FormBindingModels;

namespace DocumentsWebAPI.Data.Structured
{
    public class ApproverLineTable : IEnumerable<SqlDataRecord>
    {
            private IEnumerable<Approver> _items;

            public ApproverLineTable(IEnumerable<Approver> items)
            {
                _items = items;
            }

            private static SqlDataRecord GetRecord()
            {
                return new SqlDataRecord(
                    new SqlMetaData[] { new SqlMetaData("EmployeeId", System.Data.SqlDbType.Int),
                    new SqlMetaData("Step", System.Data.SqlDbType.Int) }
                    );
            }
            public IEnumerator<SqlDataRecord> GetEnumerator()
            {
                if (_items != null)
                {
                    foreach (Approver item in _items)
                    {
                        var rec = GetRecord();
                        rec.SetInt32(0, item.EmployeeId);
                        rec.SetInt32(1, item.Step);

                        yield return rec;
                    }
                }
                yield break;
            }
            System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }

        }
}