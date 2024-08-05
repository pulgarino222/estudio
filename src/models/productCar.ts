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
 import { cart } from './cart';
  import { TableProducts } from './tableProduct';
  import { Orders } from './order';
  
  @Table({
    tableName: 'post_tags',
    timestamps: false,
  })
  export class productCar extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;


    @ForeignKey(() => cart)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    cartId!: number;
  
    @ForeignKey(() => TableProducts)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    TableProductsId!: number;

    @HasMany(()=>Orders)
    orders!:Orders[]


  }