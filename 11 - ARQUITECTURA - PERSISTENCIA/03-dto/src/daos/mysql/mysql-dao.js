export default class MySQLDAO {
  constructor(model) {
    this.model = model;
  }

  getAll = async () => {
    try {
      //select * from coderhouse.products
      return await this.model.findAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      //select * from coderhouse.products where 'id' = 'sdsadsadas-dasdasjdbn121231'
      return await this.model.findByPk(id);
      // return await this.model.findOne( { where: { id } } );
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (data) => {
    try {
      //insert into coderhouse.products (name, description, price, stock) values ('prod1', '...', 4500, 890)
      return await this.model.create(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, data) => {
    //update coderhouse.products set 'name'='prod modif', 'description'= '...', 'price'= 900, 'stock'= 890 where id = [id]
    try {
      return await this.model.update(data, { where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      //delete from coderhouse.products where 'id' = [id]
      return await this.model.destroy({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  };
}
