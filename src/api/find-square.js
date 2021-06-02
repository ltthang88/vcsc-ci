"use strict";

module.exports = async (req, res, next) => {
  try {
    const { area } = req.query;
    const result = findLargestSquare(area);

    if (!area) {
      res.status(400).send({
        message: "Missing parameter: area",
      });
    }
    
    res.send(result);
  } catch (error) {
    res.status(400).send({
      message: error
    });
  }
};

const findLargestSquare = (area) => {
  let result = [];
  let temp = area;
  let haft_area = parseInt(Math.sqrt(area));

  for (let i = haft_area; temp > 0; i--) {
    let square = 1;

    if (i > 1) {
      square = Math.pow(i, 2);
    }

    if (square >= temp && square != 1) {
      continue;
    }

    result.push(square);
    temp -= square;
  }

  return result;
};
