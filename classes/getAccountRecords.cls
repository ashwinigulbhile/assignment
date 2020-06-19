public class getAccountRecords {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(String accName, integer acclimit) {
        string AccountName = '%'+ accName +'%';
        return [Select Id,Name,website,AccountNumber,Createdby.Name from Account where Name like:AccountName limit:acclimit];
    }
}