namespace banter;

public static class ComponentParameters
{
    public static Dictionary<string, object> Get(object obj)
    {
        Dictionary<string, object> parameters = new Dictionary<string,object>();
        foreach (var property in obj.GetType().GetProperties())
        {
            parameters.Add(property.Name, property.GetValue(obj));
        }
        return parameters;
    }
}