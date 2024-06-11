import connection from '../config/db';
import { Request, Response } from "express";

export const getListCategories = (req: Request, res: Response) => {
  const sqlQuery: string = 'SELECT categories.*, count(games.id) as count FROM `game-directory`.categories join games on games.category_id = categories.id where games.status = 1 and categories.status = 1 group by categories.id order by count desc;';
  connection.query(sqlQuery, (error: any, results: any) => {
    if (error) {
      console.error("error when try get list categories: ", error);
      res.status(500).json({
        'meta': {
          'code': 500001,
          'message': 'Something went wrong, please try again later'
        }
      })
    }
    res.status(200).json({
      'meta': {
        'code': 200000,
        'message': 'Successfully',
      },
      'data': results,
    });
  });
};

export const getListGamesByCategoryId = (req: Request, res: Response) => {
  const sqlQuery: string = 'SELECT * FROM games WHERE status = 1 AND category_id = ?';
  connection.query(sqlQuery, req.params.categoryId, (error: any, results: any) => {
    if (error) {
      console.error("error when try get list categories: ", error);
      res.status(500).json({
        'meta': {
          'code': 500001,
          'message': 'Something went wrong, please try again later'
        }
      })
    }
    res.status(200).json({
      'meta': {
        'code': 200000,
        'message': 'Successfully',
      },
      'data': results,
    });
  });
};
