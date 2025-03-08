use("FirstBase");

db.employees.aggregate(
    [
        {
            $match: {
                salary: { $gt: 7000 }
            }
        },
        {
            $count: "totalEmployees"
        }
    ]
)