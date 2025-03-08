// Вывести уровень и все навыки,
// которые встречаются у сотрудников данного уровня

use("FirstBase");

db.employees.aggregate(
    [
        { $unwind: "$skills" },
        {
            $group: {
                _id: "$level",
                skills: { $addToSet: "$skills" }
            }
        },
        {
            $project: {
                _id: 0,
                level: "$_id",
                skills: 1
            }
        },
        { $sort: { level: 1 } }
    ]
)