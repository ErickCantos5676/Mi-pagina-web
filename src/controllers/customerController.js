const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if(err){
                res.json(err);
            }
            console.log(customers)
            res.render('../views/pages/crud', {
                data: customers
            });
        })
    })
};

controller.save = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [req.body], (err, rows) =>{
            res.redirect('/crud');
        });
    });
};

controller.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/crud');
        });
    });
};
module.exports = controller;