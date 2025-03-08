use("FirstBase");

db.employees.aggregate(
    [
        {
            $unwind: "$skills"
        },
        {
            $group: {
                _id: null,
                uniqueSkills: { $addToSet: "$skills" }
            }
        },
        {
            $project: {
                _id: 0,
                totalUniqueSkills: { $size: "$uniqueSkills" }
            }
        }
    ]
)