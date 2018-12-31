// from 'flexboxgrid/dist/flexboxgrid.min.css'
export default `
    .container,
    .container-fluid {
        margin-right: auto;
        margin-left: auto
    }

    .container-fluid {
        padding-right: 0;
        padding-left: 0
    }

    .row {
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -.5rem;
        margin-left: -.5rem
    }

    .row.reverse {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse
    }

    .col.reverse {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }

    .col-xs,
    .col-xs-1,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9,
    .col-xs-offset-1,
    .col-xs-offset-10,
    .col-xs-offset-11,
    .col-xs-offset-12,
    .col-xs-offset-2,
    .col-xs-offset-3,
    .col-xs-offset-4,
    .col-xs-offset-5,
    .col-xs-offset-6,
    .col-xs-offset-7,
    .col-xs-offset-8,
    .col-xs-offset-9 {
        box-sizing: border-box;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        padding-right: .5rem;
        padding-left: .5rem
    }

    .col-xs {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        max-width: 100%
    }

    .col-xs-1 {
        -webkit-flex-basis: 8.333%;
        -ms-flex-preferred-size: 8.333%;
        flex-basis: 8.333%;
        max-width: 8.333%
    }

    .col-xs-2 {
        -webkit-flex-basis: 16.667%;
        -ms-flex-preferred-size: 16.667%;
        flex-basis: 16.667%;
        max-width: 16.667%
    }

    .col-xs-3 {
        -webkit-flex-basis: 25%;
        -ms-flex-preferred-size: 25%;
        flex-basis: 25%;
        max-width: 25%
    }

    .col-xs-4 {
        -webkit-flex-basis: 33.333%;
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .col-xs-5 {
        -webkit-flex-basis: 41.667%;
        -ms-flex-preferred-size: 41.667%;
        flex-basis: 41.667%;
        max-width: 41.667%
    }

    .col-xs-6 {
        -webkit-flex-basis: 50%;
        -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        max-width: 50%
    }

    .col-xs-7 {
        -webkit-flex-basis: 58.333%;
        -ms-flex-preferred-size: 58.333%;
        flex-basis: 58.333%;
        max-width: 58.333%
    }

    .col-xs-8 {
        -webkit-flex-basis: 66.667%;
        -ms-flex-preferred-size: 66.667%;
        flex-basis: 66.667%;
        max-width: 66.667%
    }

    .col-xs-9 {
        -webkit-flex-basis: 75%;
        -ms-flex-preferred-size: 75%;
        flex-basis: 75%;
        max-width: 75%
    }

    .col-xs-10 {
        -webkit-flex-basis: 83.333%;
        -ms-flex-preferred-size: 83.333%;
        flex-basis: 83.333%;
        max-width: 83.333%
    }

    .col-xs-11 {
        -webkit-flex-basis: 91.667%;
        -ms-flex-preferred-size: 91.667%;
        flex-basis: 91.667%;
        max-width: 91.667%
    }

    .col-xs-12 {
        -webkit-flex-basis: 100%;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%
    }

    .col-xs-offset-1 {
        margin-left: 8.333%
    }

    .col-xs-offset-2 {
        margin-left: 16.667%
    }

    .col-xs-offset-3 {
        margin-left: 25%
    }

    .col-xs-offset-4 {
        margin-left: 33.333%
    }

    .col-xs-offset-5 {
        margin-left: 41.667%
    }

    .col-xs-offset-6 {
        margin-left: 50%
    }

    .col-xs-offset-7 {
        margin-left: 58.333%
    }

    .col-xs-offset-8 {
        margin-left: 66.667%
    }

    .col-xs-offset-9 {
        margin-left: 75%
    }

    .col-xs-offset-10 {
        margin-left: 83.333%
    }

    .col-xs-offset-11 {
        margin-left: 91.667%
    }

    .start-xs {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        text-align: start
    }

    .center-xs {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center
    }

    .end-xs {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        text-align: end
    }

    .top-xs {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start
    }

    .middle-xs {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .bottom-xs {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end
    }

    .around-xs {
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around
    }

    .between-xs {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .first-xs {
        -webkit-box-ordinal-group: 0;
        -webkit-order: -1;
        -ms-flex-order: -1;
        order: -1
    }

    .last-xs {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1
    }

    @media only screen and (min-width:30em) {
        .container {
            width: 31rem
        }
        .col-sm,
        .col-sm-1,
        .col-sm-10,
        .col-sm-11,
        .col-sm-12,
        .col-sm-2,
        .col-sm-3,
        .col-sm-4,
        .col-sm-5,
        .col-sm-6,
        .col-sm-7,
        .col-sm-8,
        .col-sm-9,
        .col-sm-offset-1,
        .col-sm-offset-10,
        .col-sm-offset-11,
        .col-sm-offset-12,
        .col-sm-offset-2,
        .col-sm-offset-3,
        .col-sm-offset-4,
        .col-sm-offset-5,
        .col-sm-offset-6,
        .col-sm-offset-7,
        .col-sm-offset-8,
        .col-sm-offset-9 {
            box-sizing: border-box;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding-right: .5rem;
            padding-left: .5rem
        }
        .col-sm {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -webkit-flex-basis: 0;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            max-width: 100%
        }
        .col-sm-1 {
            -webkit-flex-basis: 8.333%;
            -ms-flex-preferred-size: 8.333%;
            flex-basis: 8.333%;
            max-width: 8.333%
        }
        .col-sm-2 {
            -webkit-flex-basis: 16.667%;
            -ms-flex-preferred-size: 16.667%;
            flex-basis: 16.667%;
            max-width: 16.667%
        }
        .col-sm-3 {
            -webkit-flex-basis: 25%;
            -ms-flex-preferred-size: 25%;
            flex-basis: 25%;
            max-width: 25%
        }
        .col-sm-4 {
            -webkit-flex-basis: 33.333%;
            -ms-flex-preferred-size: 33.333%;
            flex-basis: 33.333%;
            max-width: 33.333%
        }
        .col-sm-5 {
            -webkit-flex-basis: 41.667%;
            -ms-flex-preferred-size: 41.667%;
            flex-basis: 41.667%;
            max-width: 41.667%
        }
        .col-sm-6 {
            -webkit-flex-basis: 50%;
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            max-width: 50%
        }
        .col-sm-7 {
            -webkit-flex-basis: 58.333%;
            -ms-flex-preferred-size: 58.333%;
            flex-basis: 58.333%;
            max-width: 58.333%
        }
        .col-sm-8 {
            -webkit-flex-basis: 66.667%;
            -ms-flex-preferred-size: 66.667%;
            flex-basis: 66.667%;
            max-width: 66.667%
        }
        .col-sm-9 {
            -webkit-flex-basis: 75%;
            -ms-flex-preferred-size: 75%;
            flex-basis: 75%;
            max-width: 75%
        }
        .col-sm-10 {
            -webkit-flex-basis: 83.333%;
            -ms-flex-preferred-size: 83.333%;
            flex-basis: 83.333%;
            max-width: 83.333%
        }
        .col-sm-11 {
            -webkit-flex-basis: 91.667%;
            -ms-flex-preferred-size: 91.667%;
            flex-basis: 91.667%;
            max-width: 91.667%
        }
        .col-sm-12 {
            -webkit-flex-basis: 100%;
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            max-width: 100%
        }
        .col-sm-offset-1 {
            margin-left: 8.333%
        }
        .col-sm-offset-2 {
            margin-left: 16.667%
        }
        .col-sm-offset-3 {
            margin-left: 25%
        }
        .col-sm-offset-4 {
            margin-left: 33.333%
        }
        .col-sm-offset-5 {
            margin-left: 41.667%
        }
        .col-sm-offset-6 {
            margin-left: 50%
        }
        .col-sm-offset-7 {
            margin-left: 58.333%
        }
        .col-sm-offset-8 {
            margin-left: 66.667%
        }
        .col-sm-offset-9 {
            margin-left: 75%
        }
        .col-sm-offset-10 {
            margin-left: 83.333%
        }
        .col-sm-offset-11 {
            margin-left: 91.667%
        }
        .start-sm {
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            text-align: start
        }
        .center-sm {
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center
        }
        .end-sm {
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            text-align: end
        }
        .top-sm {
            -webkit-box-align: start;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start
        }
        .middle-sm {
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center
        }
        .bottom-sm {
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end
        }
        .around-sm {
            -webkit-justify-content: space-around;
            -ms-flex-pack: distribute;
            justify-content: space-around
        }
        .between-sm {
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
        .first-sm {
            -webkit-box-ordinal-group: 0;
            -webkit-order: -1;
            -ms-flex-order: -1;
            order: -1
        }
        .last-sm {
            -webkit-box-ordinal-group: 2;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1
        }
    }

    @media only screen and (min-width:48em) {
        .container {
            width: 49rem
        }
        .col-md,
        .col-md-1,
        .col-md-10,
        .col-md-11,
        .col-md-12,
        .col-md-2,
        .col-md-3,
        .col-md-4,
        .col-md-5,
        .col-md-6,
        .col-md-7,
        .col-md-8,
        .col-md-9,
        .col-md-offset-1,
        .col-md-offset-10,
        .col-md-offset-11,
        .col-md-offset-12,
        .col-md-offset-2,
        .col-md-offset-3,
        .col-md-offset-4,
        .col-md-offset-5,
        .col-md-offset-6,
        .col-md-offset-7,
        .col-md-offset-8,
        .col-md-offset-9 {
            box-sizing: border-box;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding-right: .5rem;
            padding-left: .5rem
        }
        .col-md {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -webkit-flex-basis: 0;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            max-width: 100%
        }
        .col-md-1 {
            -webkit-flex-basis: 8.333%;
            -ms-flex-preferred-size: 8.333%;
            flex-basis: 8.333%;
            max-width: 8.333%
        }
        .col-md-2 {
            -webkit-flex-basis: 16.667%;
            -ms-flex-preferred-size: 16.667%;
            flex-basis: 16.667%;
            max-width: 16.667%
        }
        .col-md-3 {
            -webkit-flex-basis: 25%;
            -ms-flex-preferred-size: 25%;
            flex-basis: 25%;
            max-width: 25%
        }
        .col-md-4 {
            -webkit-flex-basis: 33.333%;
            -ms-flex-preferred-size: 33.333%;
            flex-basis: 33.333%;
            max-width: 33.333%
        }
        .col-md-5 {
            -webkit-flex-basis: 41.667%;
            -ms-flex-preferred-size: 41.667%;
            flex-basis: 41.667%;
            max-width: 41.667%
        }
        .col-md-6 {
            -webkit-flex-basis: 50%;
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            max-width: 50%
        }
        .col-md-7 {
            -webkit-flex-basis: 58.333%;
            -ms-flex-preferred-size: 58.333%;
            flex-basis: 58.333%;
            max-width: 58.333%
        }
        .col-md-8 {
            -webkit-flex-basis: 66.667%;
            -ms-flex-preferred-size: 66.667%;
            flex-basis: 66.667%;
            max-width: 66.667%
        }
        .col-md-9 {
            -webkit-flex-basis: 75%;
            -ms-flex-preferred-size: 75%;
            flex-basis: 75%;
            max-width: 75%
        }
        .col-md-10 {
            -webkit-flex-basis: 83.333%;
            -ms-flex-preferred-size: 83.333%;
            flex-basis: 83.333%;
            max-width: 83.333%
        }
        .col-md-11 {
            -webkit-flex-basis: 91.667%;
            -ms-flex-preferred-size: 91.667%;
            flex-basis: 91.667%;
            max-width: 91.667%
        }
        .col-md-12 {
            -webkit-flex-basis: 100%;
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            max-width: 100%
        }
        .col-md-offset-1 {
            margin-left: 8.333%
        }
        .col-md-offset-2 {
            margin-left: 16.667%
        }
        .col-md-offset-3 {
            margin-left: 25%
        }
        .col-md-offset-4 {
            margin-left: 33.333%
        }
        .col-md-offset-5 {
            margin-left: 41.667%
        }
        .col-md-offset-6 {
            margin-left: 50%
        }
        .col-md-offset-7 {
            margin-left: 58.333%
        }
        .col-md-offset-8 {
            margin-left: 66.667%
        }
        .col-md-offset-9 {
            margin-left: 75%
        }
        .col-md-offset-10 {
            margin-left: 83.333%
        }
        .col-md-offset-11 {
            margin-left: 91.667%
        }
        .start-md {
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            text-align: start
        }
        .center-md {
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center
        }
        .end-md {
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            text-align: end
        }
        .top-md {
            -webkit-box-align: start;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start
        }
        .middle-md {
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center
        }
        .bottom-md {
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end
        }
        .around-md {
            -webkit-justify-content: space-around;
            -ms-flex-pack: distribute;
            justify-content: space-around
        }
        .between-md {
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
        .first-md {
            -webkit-box-ordinal-group: 0;
            -webkit-order: -1;
            -ms-flex-order: -1;
            order: -1
        }
        .last-md {
            -webkit-box-ordinal-group: 2;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1
        }
    }

    @media only screen and (min-width:64em) {
        .container {
            width: 65rem
        }
        .col-lg,
        .col-lg-1,
        .col-lg-10,
        .col-lg-11,
        .col-lg-12,
        .col-lg-2,
        .col-lg-3,
        .col-lg-4,
        .col-lg-5,
        .col-lg-6,
        .col-lg-7,
        .col-lg-8,
        .col-lg-9,
        .col-lg-offset-1,
        .col-lg-offset-10,
        .col-lg-offset-11,
        .col-lg-offset-12,
        .col-lg-offset-2,
        .col-lg-offset-3,
        .col-lg-offset-4,
        .col-lg-offset-5,
        .col-lg-offset-6,
        .col-lg-offset-7,
        .col-lg-offset-8,
        .col-lg-offset-9 {
            box-sizing: border-box;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding-right: .5rem;
            padding-left: .5rem
        }
        .col-lg {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -webkit-flex-basis: 0;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            max-width: 100%
        }
        .col-lg-1 {
            -webkit-flex-basis: 8.333%;
            -ms-flex-preferred-size: 8.333%;
            flex-basis: 8.333%;
            max-width: 8.333%
        }
        .col-lg-2 {
            -webkit-flex-basis: 16.667%;
            -ms-flex-preferred-size: 16.667%;
            flex-basis: 16.667%;
            max-width: 16.667%
        }
        .col-lg-3 {
            -webkit-flex-basis: 25%;
            -ms-flex-preferred-size: 25%;
            flex-basis: 25%;
            max-width: 25%
        }
        .col-lg-4 {
            -webkit-flex-basis: 33.333%;
            -ms-flex-preferred-size: 33.333%;
            flex-basis: 33.333%;
            max-width: 33.333%
        }
        .col-lg-5 {
            -webkit-flex-basis: 41.667%;
            -ms-flex-preferred-size: 41.667%;
            flex-basis: 41.667%;
            max-width: 41.667%
        }
        .col-lg-6 {
            -webkit-flex-basis: 50%;
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            max-width: 50%
        }
        .col-lg-7 {
            -webkit-flex-basis: 58.333%;
            -ms-flex-preferred-size: 58.333%;
            flex-basis: 58.333%;
            max-width: 58.333%
        }
        .col-lg-8 {
            -webkit-flex-basis: 66.667%;
            -ms-flex-preferred-size: 66.667%;
            flex-basis: 66.667%;
            max-width: 66.667%
        }
        .col-lg-9 {
            -webkit-flex-basis: 75%;
            -ms-flex-preferred-size: 75%;
            flex-basis: 75%;
            max-width: 75%
        }
        .col-lg-10 {
            -webkit-flex-basis: 83.333%;
            -ms-flex-preferred-size: 83.333%;
            flex-basis: 83.333%;
            max-width: 83.333%
        }
        .col-lg-11 {
            -webkit-flex-basis: 91.667%;
            -ms-flex-preferred-size: 91.667%;
            flex-basis: 91.667%;
            max-width: 91.667%
        }
        .col-lg-12 {
            -webkit-flex-basis: 100%;
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            max-width: 100%
        }
        .col-lg-offset-1 {
            margin-left: 8.333%
        }
        .col-lg-offset-2 {
            margin-left: 16.667%
        }
        .col-lg-offset-3 {
            margin-left: 25%
        }
        .col-lg-offset-4 {
            margin-left: 33.333%
        }
        .col-lg-offset-5 {
            margin-left: 41.667%
        }
        .col-lg-offset-6 {
            margin-left: 50%
        }
        .col-lg-offset-7 {
            margin-left: 58.333%
        }
        .col-lg-offset-8 {
            margin-left: 66.667%
        }
        .col-lg-offset-9 {
            margin-left: 75%
        }
        .col-lg-offset-10 {
            margin-left: 83.333%
        }
        .col-lg-offset-11 {
            margin-left: 91.667%
        }
        .start-lg {
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            text-align: start
        }
        .center-lg {
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center
        }
        .end-lg {
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            text-align: end
        }
        .top-lg {
            -webkit-box-align: start;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start
        }
        .middle-lg {
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center
        }
        .bottom-lg {
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end
        }
        .around-lg {
            -webkit-justify-content: space-around;
            -ms-flex-pack: distribute;
            justify-content: space-around
        }
        .between-lg {
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
        .first-lg {
            -webkit-box-ordinal-group: 0;
            -webkit-order: -1;
            -ms-flex-order: -1;
            order: -1
        }
        .last-lg {
            -webkit-box-ordinal-group: 2;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1
        }
    }

    @media only screen and (min-width:85.375rem) {
        .container {
            width: 85.375rem
        }
        .col-xl,
        .col-xl-1,
        .col-xl-10,
        .col-xl-11,
        .col-xl-12,
        .col-xl-2,
        .col-xl-3,
        .col-xl-4,
        .col-xl-5,
        .col-xl-6,
        .col-xl-7,
        .col-xl-8,
        .col-xl-9,
        .col-xl-offset-1,
        .col-xl-offset-10,
        .col-xl-offset-11,
        .col-xl-offset-12,
        .col-xl-offset-2,
        .col-xl-offset-3,
        .col-xl-offset-4,
        .col-xl-offset-5,
        .col-xl-offset-6,
        .col-xl-offset-7,
        .col-xl-offset-8,
        .col-xl-offset-9 {
            box-sizing: border-box;
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 auto;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            padding-right: .5rem;
            padding-left: .5rem
        }
        .col-xl {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            -webkit-flex-basis: 0;
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            max-width: 100%
        }
        .col-xl-1 {
            -webkit-flex-basis: 8.333%;
            -ms-flex-preferred-size: 8.333%;
            flex-basis: 8.333%;
            max-width: 8.333%
        }
        .col-xl-2 {
            -webkit-flex-basis: 16.667%;
            -ms-flex-preferred-size: 16.667%;
            flex-basis: 16.667%;
            max-width: 16.667%
        }
        .col-xl-3 {
            -webkit-flex-basis: 25%;
            -ms-flex-preferred-size: 25%;
            flex-basis: 25%;
            max-width: 25%
        }
        .col-xl-4 {
            -webkit-flex-basis: 33.333%;
            -ms-flex-preferred-size: 33.333%;
            flex-basis: 33.333%;
            max-width: 33.333%
        }
        .col-xl-5 {
            -webkit-flex-basis: 41.667%;
            -ms-flex-preferred-size: 41.667%;
            flex-basis: 41.667%;
            max-width: 41.667%
        }
        .col-xl-6 {
            -webkit-flex-basis: 50%;
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            max-width: 50%
        }
        .col-xl-7 {
            -webkit-flex-basis: 58.333%;
            -ms-flex-preferred-size: 58.333%;
            flex-basis: 58.333%;
            max-width: 58.333%
        }
        .col-xl-8 {
            -webkit-flex-basis: 66.667%;
            -ms-flex-preferred-size: 66.667%;
            flex-basis: 66.667%;
            max-width: 66.667%
        }
        .col-xl-9 {
            -webkit-flex-basis: 75%;
            -ms-flex-preferred-size: 75%;
            flex-basis: 75%;
            max-width: 75%
        }
        .col-xl-10 {
            -webkit-flex-basis: 83.333%;
            -ms-flex-preferred-size: 83.333%;
            flex-basis: 83.333%;
            max-width: 83.333%
        }
        .col-xl-11 {
            -webkit-flex-basis: 91.667%;
            -ms-flex-preferred-size: 91.667%;
            flex-basis: 91.667%;
            max-width: 91.667%
        }
        .col-xl-12 {
            -webkit-flex-basis: 100%;
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            max-width: 100%
        }
        .col-xl-offset-1 {
            margin-left: 8.333%
        }
        .col-xl-offset-2 {
            margin-left: 16.667%
        }
        .col-xl-offset-3 {
            margin-left: 25%
        }
        .col-xl-offset-4 {
            margin-left: 33.333%
        }
        .col-xl-offset-5 {
            margin-left: 41.667%
        }
        .col-xl-offset-6 {
            margin-left: 50%
        }
        .col-xl-offset-7 {
            margin-left: 58.333%
        }
        .col-xl-offset-8 {
            margin-left: 66.667%
        }
        .col-xl-offset-9 {
            margin-left: 75%
        }
        .col-xl-offset-10 {
            margin-left: 83.333%
        }
        .col-xl-offset-11 {
            margin-left: 91.667%
        }
        .start-xl {
            -webkit-box-pack: start;
            -webkit-justify-content: flex-start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            text-align: start
        }
        .center-xl {
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center
        }
        .end-xl {
            -webkit-box-pack: end;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            text-align: end
        }
        .top-xl {
            -webkit-box-align: start;
            -webkit-align-items: flex-start;
            -ms-flex-align: start;
            align-items: flex-start
        }
        .middle-xl {
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center
        }
        .bottom-xl {
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end
        }
        .around-xl {
            -webkit-justify-content: space-around;
            -ms-flex-pack: distribute;
            justify-content: space-around
        }
        .between-xl {
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
        .first-xl {
            -webkit-box-ordinal-group: 0;
            -webkit-order: -1;
            -ms-flex-order: -1;
            order: -1
        }
        .last-xl {
            -webkit-box-ordinal-group: 2;
            -webkit-order: 1;
            -ms-flex-order: 1;
            order: 1
        }
    }
`
