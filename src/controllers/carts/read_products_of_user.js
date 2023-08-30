import Cart from "../../models/Cart.js";
import Product from "../../models/Product.js"
import User from "../../models/User.js"
import Category from "../../models/Category.js"
import State from "../../models/State.js"

export default async function (req, res, next) {
  try {
    let queries = {};
    let pagination = { page: 1, limit: 10 };
    if (req.query.page) {
      pagination.page = req.query.page;
    }
    if (req.query.limit) {
      pagination.limit = req.query.limit;
    }
    if (req.query.user_id) {
      //obtener el user_id de passport!!! no de queries
      queries.user_id = req.query.user_id;
    }
    
    let all = await Cart.find(queries).populate({
      path:'product_id',
      select:'-createdAt -updatedAt -__v',
      populate: {
        path: 'category_id',
        select: 'name'
      }
    }).populate('user_id','email').populate('state_id','name').select('-createdAt -updatedAt -__v')
    return res.status(200).json({
      success: true,
      response: {
        all,
        prev: "prev", //desarrollar correctamente
        next: "next", //desarrollar correctamente
      },
    });
  } catch (error) {
    return next(next);
  }
}
