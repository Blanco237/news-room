
module.exports = (sequelize, DataTypes) => {
    
    const Story = sequelize.define("Africa", {
        aid: {
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
        createdAt: {
            type: DataTypes.DATEONLY
        }
    },
    {
        tableName: "Africa",
        timestamps: true, 
        paranoid: true
    }
    )

    return Story;
}