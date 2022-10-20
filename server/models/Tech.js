
module.exports = (sequelize, DataTypes) => {
    
    const Tech = sequelize.define("Tech", {
        tid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATEONLY
        }
    },
    {
        tableName: "Tech",
        timestamps: true, 
        paranoid: true
    }
    )

    return Tech;
}