var cql = require('node-cassandra-cql'),
    client = new cql.Client({
        hosts: ['127.0.0.1:9042'],
        keyspace: 'impressions',
        username: 'testuser',
        password: 'testuser'
    });

exports.userHome = function(req, res) {
    if (req.cookies.user == undefined || req.cookies.pass == undefined) {
        res.render('users/login', {
            title: 'Guest'
        })
    } else {
        res.render('users/home', {
            title: 'Awesome User',
        });
    }
};

/*
client.execute('SELECT * FROM impressions_by_business', [],
    function(err, result) {
        if (err) {
            console.log('execute failed', err);
        } else {
            for (var i = 0; i < result.rows.length; i++) {
                var bid = result.rows[i].get('bus_id');
                info = [];
                info[0] = result.rows[i].get('date');
                info[1] = result.rows[i].get('shown_bus_id');
                info[2] = result.rows[i].get('shown_bus_name');
                info[3] = result.rows[i].get('time');
                info[4] = result.rows[i].get('bus_name');
                // Handles same company having multiple impressions
                if (data.hasOwnProperty(bid)) {
                    var new_d = [];
                    if (data[bid].length == 5 && (typeof data[bid][0] == 'string')) {
                        new_d[0] = data[bid];
                        new_d[1] = info;
                    } else {
                        new_d = data[bid];
                        new_d[new_d.length] = info;
                    }
                    data[bid] = new_d;
                } else {
                    data[bid] = info;
                }
            }
        }
    }
*/