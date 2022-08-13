const { body, param } = require("express-validator")

const createBlogValidation = [
    body('title')
    .exists()
    .withMessage('title is required')
    .bail()
    .notEmpty()
    .withMessage('title should not be empty')
    .bail()
    .isString()
    .withMessage('title should be in String')
    .bail(),
    body('body')
    .exists()
    .withMessage('body is required')
    .bail()
    .notEmpty()
    .withMessage('body should not be empty')
    .bail()
    .isString()
    .withMessage('body should be in String')
    .bail(),
    body('authorId')
    .exists()
    .withMessage('authorId is required')
    .bail()
    .notEmpty()
    .withMessage('authorId should not be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid authorId')
    .bail(),
    body('tags')
    .exists()
    .withMessage('tags is required')
    .bail()
    .notEmpty()
    .withMessage('tags should not be empty')
    .bail()
    .isString()
    .withMessage('tags should be in String')
    .bail(),
    body('category')
    .exists()
    .withMessage('category is required')
    .bail()
    .notEmpty()
    .withMessage('category should not be empty')
    .bail()
    .isString()
    .withMessage('category should be in String')
    .bail(),
    body('subcategory')
    .exists()
    .withMessage('subcategory is required')
    .bail()
    .notEmpty()
    .withMessage('subcategory should not be empty')
    .bail()
    .isString()
    .withMessage('subcategory should be in String')
    .bail(),
    body('isDeleted')
    .default(false)
    .bail()
    .notEmpty()
    .withMessage('isDeleted should not be empty')
    .bail()
    .isBoolean()
    .withMessage('isDeleted should be true/false only')
    .bail(),
    body('isPublished')
    .default(false)
    .bail()
    .notEmpty()
    .withMessage('isPublished should not be empty')
    .bail()
    .isBoolean()
    .withMessage('isPublished should be true/false only')
    .bail(),
    body('publishedAt')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('publishedAt should not be empty')
    .bail()
    .isDate()
    .withMessage('publishedAt should be Date')
    .bail()
]

module.exports.createBlogValidation = createBlogValidation

const updateBlogValidation = [
    param('blogId')
    .exists()
    .withMessage('blogId is required')
    .bail()
    .isMongoId()
    .withMessage('Invalid blogId')
    .bail(),
    body('title')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('title should not be empty')
    .bail()
    .isString()
    .withMessage('title should be in String')
    .bail(),
    body('body')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('body should not be empty')
    .bail()
    .isString()
    .withMessage('body should be in String')
    .bail(),
    body('authorId')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('authorId should not be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid authorId')
    .bail(),
    body('tags')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('tags should not be empty')
    .bail()
    .isString()
    .withMessage('tags should be in String')
    .bail(),
    body('category')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('category should not be empty')
    .bail()
    .isString()
    .withMessage('category should be in String')
    .bail(),
    body('subcategory')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('subcategory should not be empty')
    .bail()
    .isString()
    .withMessage('subcategory should be in String')
    .bail(),
    body('isDeleted')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('isDeleted should not be empty')
    .bail()
    .isBoolean()
    .withMessage('isDeleted should be true/false only')
    .bail(),
    body('isPublished')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('isPublished should not be empty')
    .bail()
    .isBoolean()
    .withMessage('isPublished should be true/false only')
    .bail(),
    body('publishedAt')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('publishedAt should not be empty')
    .bail()
    .isDate()
    .withMessage('publishedAt should be Date')
    .bail()
]

module.exports.updateBlogValidation = updateBlogValidation

const getBlogValidation = [
    body('authorId')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('authorId should not be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid authorId')
    .bail(),
    body('tags')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('tags should not be empty')
    .bail()
    .isString()
    .withMessage('tags should be in String')
    .bail(),
    body('category')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('category should not be empty')
    .bail()
    .isString()
    .withMessage('category should be in String')
    .bail(),
    body('subcategory')
    .optional()
    .bail()
    .notEmpty()
    .withMessage('subcategory should not be empty')
    .bail()
    .isString()
    .withMessage('subcategory should be in String')
    .bail()
]

module.exports.getBlogValidation =  getBlogValidation

const deleteBlogValidation = [
    param('blogId')
    .exists()
    .withMessage('blogId is required')
    .bail()
    .isMongoId()
    .withMessage('Invalid blogId')
    .bail()
]

module.exports.deleteBlogValidation = deleteBlogValidation