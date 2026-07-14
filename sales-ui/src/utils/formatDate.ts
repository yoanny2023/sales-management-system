export function formatDate(date: string){
  return new Intl.DateTimeFormat("en-US",{
                         month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      ).format(new Date(date))
}

export function getCurrentMonthYear(){
  return new Date().toLocaleString("en-us",{
    month: "long",
    year: "numeric"
  });
}