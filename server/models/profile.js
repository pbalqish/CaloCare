"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User);
    }
  }
  Profile.init(
    {
      fullName: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `User Id is required`,
          },
          notEmpty: {
            msg: `User Id is required`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
