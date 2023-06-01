#include <iostream>
#include <string>

using namespace std;

string to_camel_case(string text)
{
    if (text.empty())
    {
        return "";
    }

    for (size_t i = 0; i < text.length(); i++)
    {
        if (text[i] == '-' || text[i] == '_')
        {
            text = text.replace(i, 1, "");
            text[i] = toupper(text[i]);
        }
    }

    return text;
}

int main()
{
    cout << to_camel_case("") << endl;
    cout << to_camel_case("The-Stealth-Warrior") << endl;
    cout << to_camel_case("the_stealth_warrior") << endl;
    cout << to_camel_case("A-B-C") << endl;
}