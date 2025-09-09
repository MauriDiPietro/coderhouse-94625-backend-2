export default class MongoDao {
  constructor(model) {
    this.model = model;
  }

  create = async (body) => {
    try {
      return await this.model.create(body);
    } catch (error) {
      throw new Error(error);
    }
  };

  getAll = async () => {
    try {
      return await this.model.find({ deleted: false });
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (_id) => {
    try {
      return await this.model.findOne({ _id, deleted: false });
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, body) => {
    try {
      return await this.model.findByIdAndUpdate(id, body, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      return await this.model.findByIdAndUpdate(
        id,
        { deleted: true },
        { new: true }
      );
    } catch (error) {
      throw new Error(error);
    }
  };
}
