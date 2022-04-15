
export default function measureRunningTime(func: (...args: any[]) => any, ...args:any){
    const varToString:(varObj:any)=>string = varObj => Object.keys(varObj)[0]
    const displayName = func.name || varToString({ func })
    console.time(displayName)
    func(...args)
    console.timeEnd(displayName)
}
