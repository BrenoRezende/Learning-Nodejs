class ProductServices {
    constructor(connection) {
        this._connection = connection;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM products', (err, result) => {
                if (err)
                    reject(err);
                    
                resolve(result);
            });
        });
    }
}

module.exports = () => {
    return ProductServices;
};