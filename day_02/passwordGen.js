function genPass(n)     // e.g. pass(10) return 'unQ0S2j9FY'
{
    let c='abcdefghijklmnopqrstuvwxyz'; c+=c.toUpperCase()+1234567890;

    return '-'.repeat(n).replace(/./g,b=>c[~~(Math.random()*62)])
} 

