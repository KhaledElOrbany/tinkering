#include <iostream>
#include <sstream>
#include <cctype>

using namespace std;

string accum(const string &str)
{
    // string result = "";
    // for (size_t i = 0; i < str.length(); i++)
    // {
    //     for (size_t j = 0; j <= i; j++)
    //     {
    //         result += j == 0 ? toupper(str[i]) : tolower(str[i]);
    //     }
    //     result += i == str.length() - 1 ? "" : "-";
    // }
    // return result;

    stringstream result;
    for (int i = 0; i < str.length(); i++)
        result << "-" << string(1, toupper(str[i])) << string(i, tolower(str[i]));
    return result.str().substr(1);
}

int main(int argc, char const *argv[])
{
    cout << accum("ZpglnRxqenU") << "\n";
    cout << accum("NyffsGeyylB") << "\n";
    cout << accum("MjtkuBovqrU") << "\n";
    cout << accum("EvidjUnokmM") << "\n";
    return 0;
}
