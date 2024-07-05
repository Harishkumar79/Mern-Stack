//Find Greatest integer among 7 number using if-else-if ladder

let a = 311;
b = 110;
c = 304;
d = 178;
e = 310;
f = 278;
g = 100;

if (a > b) {
    if (a > c) {
        if (a > d) {
            if (a > e) {
                if (a > f) {
                    if (a > g) {
                        console.log("A is largest");
                    } else {
                        console.log("G is largest");
                    }
                } else if (f > g) {
                    console.log("F is largest");
                } else {
                    console.log("G is largest");
                }
            } else if (e > f) {
                if (e > g) {
                    console.log("E is largest");
                } else {
                    console.log("G is largest");
                }
            } else if (f > g) {
                console.log("F is largest");
            } else {
                console.log("G is largest");
            }
        } else if (d > e) {
            if (d > f) {
                if (d > g) {
                    console.log("D is largest");
                } else {
                    console.log("G is largest");
                }
            } else if (f > g) {
                console.log("F is largest");
            } else {
                console.log("G is largest");
            }
        } else if (e > f) {
            if (e > g) {
                console.log("E is greater");
            } else {
                console.log("G is greater");
            }
        } else if (f > g) {
            console.log("F is greater");
        } else {
            console.log("G is greater");
        }

    } else if (c > d) {
        if (c > e) {
            if (c > f) {
                if (c > g) {
                    console.log("C is greater");
                } else {
                    console.log("G is greater");
                }
            } else if (f > g) {
                console.log("F is greater");
            } else {
                console.log("G is greater");
            }
        } else if (e > f) {
            if (e > g) {
                console.log("E is greater");
            } else {
                console.log("G is greater");
            }
        } else if (f > g) {
            console.log("F is greater");
        } else {
            console.log("G is greater");
        }
    } else if (d > e) {
        if (d > f) {
            if (d > g) {
                console.log("D is greater");
            } else {
                console.log("G is greater");
            }
        } else if (f > g) {
            console.log("F is greater");
        } else {
            console.log("G is greater");
        }
    } else if (e > f) {
        if (e > g) {
            console.log("E is greater");
        } else {
            console.log("G is greater");
        }
    } else if (f > g) {
        console.log("F is greater");
    } else {
        console.log("G is greater");
    }

} else if (b > c) {
    if (b > d) {
        if (b > e) {
            if (b > f) {
                if (b > g) {
                    console.log("B is greater");
                } else {
                    console.log("G is greater");
                }
            } else if (f > g) {
                console.log("F is greater");
            } else {
                console.log("G is greater");
            }
        } else if (e > f) {
            if (e > g) {
                console.log("E is greater");
            } else {
                console.log("G is greater");
            }
        } else if (f > g) {
            console.log("F is greater");
        } else {
            console.log("G is greater");
        }
    } else if (d > e) {
        if (d > f) {
            if (d > g) {
                console.log("D is greater");
            } else {
                console.log("G is greater");
            }
        } else if (f > g) {
            console.log("F is greater");
        } else {
            console.log("G is greater");
        }
    } else if (e > f) {
        if (e > g) {
            console.log("E is greater");
        } else {
            console.log("G is greater");
        }
    } else if (f > g) {
        console.log("F is greater");
    } else {
        console.log("G is greater");
    }

} else if (c > d) {
    if (c > e) {
        if (c > f) {
            if (c > g) {
                console.log("C is greater");
            } else {
                console.log("G is greater");
            }
        } else if (f > g) {
            console.log("F is greater");
        } else {
            console.log("G is greater");
        }
    } else if (e > f) {
        if (e > g) {
            console.log("E is greater");
        } else {
            console.log("G is greater");
        }
    } else if (f > g) {
        console.log("F is greater");
    } else {
        console.log("G is greater");
    }
} else if (d > e) {
    if (d > f) {
        if (d > g) {
            console.log("D is greater");
        } else {
            console.log("G is greater");
        }
    } else if (f > g) {
        console.log("F is greater");
    } else {
        console.log("G is greater");
    }
} else if (e > f) {
    if (e > g) {
        console.log("E is greater");
    } else {
        console.log("G is greater");
    }
} else if (f > g) {
    console.log("F is greater");
} else if (g > f) {
    console.log("G is greater");
} else {
    console.log("all numbers are equal");
}