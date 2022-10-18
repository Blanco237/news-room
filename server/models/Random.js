
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Random", {
        rid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        source: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATEONLY
        }
    },
    {
        tableName: "Random",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}