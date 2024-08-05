import{Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    Unique,
    AllowNull,
    Default,
    }from 'sequelize-typescript'
import { Tableusers } from './tableUsers';
import { productCar } from './productCar';



    @Table({
    tableName:'orders',
    timestamps:true
})

export class Orders extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @ForeignKey(() => Tableusers)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      userId!: number;

      @BelongsTo(() => Tableusers)
      tableuser!: Tableusers

      @ForeignKey(() => productCar)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      productcarId!: number;


      @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      total!: number;
      

     

  }