function feature(req, res) {
    let data = {
        title: "Feature"
    };

    res.render('feature_name/feature.hbs', data);
}

module.exports = { feature };