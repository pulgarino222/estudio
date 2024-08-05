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
import { TableRol } from './tableRole';


    @Table({
    tableName:'Tableusers',
    timestamps:true
})

export class Tableusers extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(200),// se define con varchar de 200 tal como lo dice en el moodle
        allowNull: false,
        unique:true
      })
      email!: string;

      @Column({
        type: DataType.STRING(200),
        allowNull: false,
      })
      password!: string;

      @ForeignKey(() => TableRol)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rolId!: number;

  @BelongsTo(() => TableRol)
  patient!: TableRol

      


   
    
  }
