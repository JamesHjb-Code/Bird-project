<?php

/* table/relation/common_form.twig */
class __TwigTemplate_d5c7b294aba226b4dc16981d943bddeef007d37a72e566ab2815de3f7aa5c32c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<form method=\"post\" action=\"tbl_relation.php\">
    ";
        // line 2
        echo PhpMyAdmin\Url::getHiddenInputs((isset($context["db"]) ? $context["db"] : null), (isset($context["table"]) ? $context["table"] : null));
        echo "
    ";
        // line 4
        echo "    ";
        if (PhpMyAdmin\Util::isForeignKeySupported((isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null))) {
            // line 5
            echo "        <fieldset>
            <legend>";
            // line 6
            echo _gettext("Foreign key constraints");
            echo "</legend>
            <div class=\"responsivetable jsresponsive\">
            <table id=\"foreign_keys\" class=\"relationalTable\">
                <thead><tr>
                    <th>";
            // line 10
            echo _gettext("Actions");
            echo "</th>
                    <th>";
            // line 11
            echo _gettext("Constraint properties");
            echo "</th>
                    ";
            // line 12
            if ((twig_upper_filter($this->env, (isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null)) == "INNODB")) {
                // line 13
                echo "                        <th>
                            ";
                // line 14
                echo _gettext("Column");
                // line 15
                echo "                            ";
                echo PhpMyAdmin\Util::showHint(_gettext("Creating a foreign key over a non-indexed column would automatically create an index on it. Alternatively, you can define an index below, before creating the foreign key."));
                echo "
                        </th>
                    ";
            } else {
                // line 18
                echo "                        <th>
                            ";
                // line 19
                echo _gettext("Column");
                // line 20
                echo "                            ";
                echo PhpMyAdmin\Util::showHint(_gettext("Only columns with index will be displayed. You can define an index below."));
                echo "
                        </th>
                    ";
            }
            // line 23
            echo "                    <th colspan=\"3\">
                        ";
            // line 24
            echo _gettext("Foreign key constraint");
            // line 25
            echo "                        (";
            echo twig_escape_filter($this->env, (isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null), "html", null, true);
            echo ")
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>";
            // line 32
            echo _gettext("Database");
            echo "</th>
                    <th>";
            // line 33
            echo _gettext("Table");
            echo "</th>
                    <th>";
            // line 34
            echo _gettext("Column");
            echo "</th>
                </tr></thead>
                ";
            // line 36
            $context["i"] = 0;
            // line 37
            echo "                ";
            if ( !twig_test_empty((isset($context["existrel_foreign"]) ? $context["existrel_foreign"] : null))) {
                // line 38
                echo "                    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["existrel_foreign"]) ? $context["existrel_foreign"] : null));
                foreach ($context['_seq'] as $context["key"] => $context["one_key"]) {
                    // line 39
                    echo "                        ";
                    // line 40
                    echo "                        ";
                    $context["foreign_db"] = ((($this->getAttribute($context["one_key"], "ref_db_name", [], "array", true, true) &&  !(null === $this->getAttribute(                    // line 41
$context["one_key"], "ref_db_name", [], "array")))) ? ($this->getAttribute(                    // line 42
$context["one_key"], "ref_db_name", [], "array")) : ((isset($context["db"]) ? $context["db"] : null)));
                    // line 43
                    echo "                        ";
                    $context["foreign_table"] = false;
                    // line 44
                    echo "                        ";
                    if ((isset($context["foreign_db"]) ? $context["foreign_db"] : null)) {
                        // line 45
                        echo "                            ";
                        $context["foreign_table"] = ((($this->getAttribute($context["one_key"], "ref_table_name", [], "array", true, true) &&  !(null === $this->getAttribute(                        // line 46
$context["one_key"], "ref_table_name", [], "array")))) ? ($this->getAttribute(                        // line 47
$context["one_key"], "ref_table_name", [], "array")) : (false));
                        // line 48
                        echo "                        ";
                    }
                    // line 49
                    echo "                        ";
                    $context["unique_columns"] = [];
                    // line 50
                    echo "                        ";
                    if (((isset($context["foreign_db"]) ? $context["foreign_db"] : null) && (isset($context["foreign_table"]) ? $context["foreign_table"] : null))) {
                        // line 51
                        echo "                            ";
                        $context["table_obj"] = PhpMyAdmin\Table::get((isset($context["foreign_table"]) ? $context["foreign_table"] : null), (isset($context["foreign_db"]) ? $context["foreign_db"] : null));
                        // line 52
                        echo "                            ";
                        $context["unique_columns"] = $this->getAttribute((isset($context["table_obj"]) ? $context["table_obj"] : null), "getUniqueColumns", [0 => false, 1 => false], "method");
                        // line 53
                        echo "                        ";
                    }
                    // line 54
                    echo "                        ";
                    $this->loadTemplate("table/relation/foreign_key_row.twig", "table/relation/common_form.twig", 54)->display(["i" =>                     // line 55
(isset($context["i"]) ? $context["i"] : null), "one_key" =>                     // line 56
$context["one_key"], "column_array" =>                     // line 57
(isset($context["column_array"]) ? $context["column_array"] : null), "options_array" =>                     // line 58
(isset($context["options_array"]) ? $context["options_array"] : null), "tbl_storage_engine" =>                     // line 59
(isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null), "db" =>                     // line 60
(isset($context["db"]) ? $context["db"] : null), "table" =>                     // line 61
(isset($context["table"]) ? $context["table"] : null), "url_params" =>                     // line 62
(isset($context["url_params"]) ? $context["url_params"] : null), "databases" =>                     // line 63
(isset($context["databases"]) ? $context["databases"] : null), "foreign_db" =>                     // line 64
(isset($context["foreign_db"]) ? $context["foreign_db"] : null), "foreign_table" =>                     // line 65
(isset($context["foreign_table"]) ? $context["foreign_table"] : null), "unique_columns" =>                     // line 66
(isset($context["unique_columns"]) ? $context["unique_columns"] : null)]);
                    // line 68
                    echo "                        ";
                    $context["i"] = ((isset($context["i"]) ? $context["i"] : null) + 1);
                    // line 69
                    echo "                    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['one_key'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 70
                echo "                ";
            }
            // line 71
            echo "                ";
            $this->loadTemplate("table/relation/foreign_key_row.twig", "table/relation/common_form.twig", 71)->display(["i" =>             // line 72
(isset($context["i"]) ? $context["i"] : null), "one_key" => [], "column_array" =>             // line 74
(isset($context["column_array"]) ? $context["column_array"] : null), "options_array" =>             // line 75
(isset($context["options_array"]) ? $context["options_array"] : null), "tbl_storage_engine" =>             // line 76
(isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null), "db" =>             // line 77
(isset($context["db"]) ? $context["db"] : null), "table" =>             // line 78
(isset($context["table"]) ? $context["table"] : null), "url_params" =>             // line 79
(isset($context["url_params"]) ? $context["url_params"] : null), "databases" =>             // line 80
(isset($context["databases"]) ? $context["databases"] : null), "foreign_db" =>             // line 81
(isset($context["foreign_db"]) ? $context["foreign_db"] : null), "foreign_table" =>             // line 82
(isset($context["foreign_table"]) ? $context["foreign_table"] : null), "unique_columns" =>             // line 83
(isset($context["unique_columns"]) ? $context["unique_columns"] : null)]);
            // line 85
            echo "                ";
            $context["i"] = ((isset($context["i"]) ? $context["i"] : null) + 1);
            // line 86
            echo "                <tr>
                    <th colspan=\"6\">
                        <a class=\"formelement clearfloat add_foreign_key\" href=\"\">
                            ";
            // line 89
            echo _gettext("+ Add constraint");
            // line 90
            echo "                    </td>
                </tr>
            </table>
            </div>
        </fieldset>
    ";
        }
        // line 96
        echo "
    ";
        // line 97
        if ($this->getAttribute((isset($context["cfg_relation"]) ? $context["cfg_relation"] : null), "relwork", [], "array")) {
            // line 98
            echo "        ";
            if (PhpMyAdmin\Util::isForeignKeySupported((isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null))) {
                // line 99
                echo "            ";
                echo PhpMyAdmin\Util::getDivForSliderEffect("ir_div", _gettext("Internal relationships"));
                echo "
        ";
            }
            // line 101
            echo "
        <fieldset>
            <legend>
                ";
            // line 104
            echo _gettext("Internal relationships");
            // line 105
            echo "                ";
            echo PhpMyAdmin\Util::showDocu("config", "cfg_Servers_relation");
            echo "
            </legend>
            <table id=\"internal_relations\" class=\"relationalTable\">
                <tr>
                    <th>";
            // line 109
            echo _gettext("Column");
            echo "</th>
                    <th>";
            // line 110
            echo _gettext("Internal relation");
            // line 111
            echo "                        ";
            if (PhpMyAdmin\Util::isForeignKeySupported((isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null))) {
                // line 112
                echo "                            ";
                echo PhpMyAdmin\Util::showHint(_gettext("An internal relation is not necessary when a corresponding FOREIGN KEY relation exists."));
                echo "
                        ";
            }
            // line 114
            echo "                    </th>
                    ";
            // line 115
            $context["saved_row_cnt"] = (twig_length_filter($this->env, (isset($context["save_row"]) ? $context["save_row"] : null)) - 1);
            // line 116
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(range(0, (isset($context["saved_row_cnt"]) ? $context["saved_row_cnt"] : null)));
            foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
                // line 117
                echo "                        ";
                $context["myfield"] = $this->getAttribute($this->getAttribute((isset($context["save_row"]) ? $context["save_row"] : null), $context["i"], [], "array"), "Field", [], "array");
                // line 118
                echo "                        ";
                // line 120
                echo "                        ";
                $context["myfield_md5"] = md5((isset($context["myfield"]) ? $context["myfield"] : null));
                // line 121
                echo "
                        ";
                // line 122
                $context["foreign_table"] = false;
                // line 123
                echo "                        ";
                $context["foreign_column"] = false;
                // line 124
                echo "
                        ";
                // line 126
                echo "                        ";
                if ($this->getAttribute((isset($context["existrel"]) ? $context["existrel"] : null), (isset($context["myfield"]) ? $context["myfield"] : null), [], "array", true, true)) {
                    // line 127
                    echo "                            ";
                    $context["foreign_db"] = $this->getAttribute($this->getAttribute((isset($context["existrel"]) ? $context["existrel"] : null), (isset($context["myfield"]) ? $context["myfield"] : null), [], "array"), "foreign_db", [], "array");
                    // line 128
                    echo "                        ";
                } else {
                    // line 129
                    echo "                            ";
                    $context["foreign_db"] = (isset($context["db"]) ? $context["db"] : null);
                    // line 130
                    echo "                        ";
                }
                // line 131
                echo "
                        ";
                // line 133
                echo "                        ";
                $context["tables"] = [];
                // line 134
                echo "                        ";
                if ((isset($context["foreign_db"]) ? $context["foreign_db"] : null)) {
                    // line 135
                    echo "                            ";
                    if ($this->getAttribute((isset($context["existrel"]) ? $context["existrel"] : null), (isset($context["myfield"]) ? $context["myfield"] : null), [], "array", true, true)) {
                        // line 136
                        echo "                                ";
                        $context["foreign_table"] = $this->getAttribute($this->getAttribute((isset($context["existrel"]) ? $context["existrel"] : null), (isset($context["myfield"]) ? $context["myfield"] : null), [], "array"), "foreign_table", [], "array");
                        // line 137
                        echo "                            ";
                    }
                    // line 138
                    echo "                            ";
                    $context["tables"] = $this->getAttribute((isset($context["dbi"]) ? $context["dbi"] : null), "getTables", [0 => (isset($context["foreign_db"]) ? $context["foreign_db"] : null)], "method");
                    // line 139
                    echo "                        ";
                }
                // line 140
                echo "
                        ";
                // line 142
                echo "                        ";
                $context["unique_columns"] = [];
                // line 143
                echo "                        ";
                if (((isset($context["foreign_db"]) ? $context["foreign_db"] : null) && (isset($context["foreign_table"]) ? $context["foreign_table"] : null))) {
                    // line 144
                    echo "                            ";
                    if ($this->getAttribute((isset($context["existrel"]) ? $context["existrel"] : null), (isset($context["myfield"]) ? $context["myfield"] : null), [], "array", true, true)) {
                        // line 145
                        echo "                                ";
                        $context["foreign_column"] = $this->getAttribute($this->getAttribute((isset($context["existrel"]) ? $context["existrel"] : null), (isset($context["myfield"]) ? $context["myfield"] : null), [], "array"), "foreign_field", [], "array");
                        // line 146
                        echo "                            ";
                    }
                    // line 147
                    echo "                            ";
                    $context["table_obj"] = PhpMyAdmin\Table::get((isset($context["foreign_table"]) ? $context["foreign_table"] : null), (isset($context["foreign_db"]) ? $context["foreign_db"] : null));
                    // line 148
                    echo "                            ";
                    $context["unique_columns"] = $this->getAttribute((isset($context["table_obj"]) ? $context["table_obj"] : null), "getUniqueColumns", [0 => false, 1 => false], "method");
                    // line 149
                    echo "                        ";
                }
                // line 150
                echo "
                        ";
                // line 151
                $this->loadTemplate("table/relation/internal_relational_row.twig", "table/relation/common_form.twig", 151)->display(["myfield" =>                 // line 152
(isset($context["myfield"]) ? $context["myfield"] : null), "myfield_md5" =>                 // line 153
(isset($context["myfield_md5"]) ? $context["myfield_md5"] : null), "databases" =>                 // line 154
(isset($context["databases"]) ? $context["databases"] : null), "tables" =>                 // line 155
(isset($context["tables"]) ? $context["tables"] : null), "columns" =>                 // line 156
(isset($context["unique_columns"]) ? $context["unique_columns"] : null), "foreign_db" =>                 // line 157
(isset($context["foreign_db"]) ? $context["foreign_db"] : null), "foreign_table" =>                 // line 158
(isset($context["foreign_table"]) ? $context["foreign_table"] : null), "foreign_column" =>                 // line 159
(isset($context["foreign_column"]) ? $context["foreign_column"] : null)]);
                // line 161
                echo "                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 162
            echo "            </table>
        </fieldset>
        ";
            // line 164
            if (PhpMyAdmin\Util::isForeignKeySupported((isset($context["tbl_storage_engine"]) ? $context["tbl_storage_engine"] : null))) {
                // line 165
                echo "            </div>
        ";
            }
            // line 167
            echo "    ";
        }
        // line 168
        echo "
    ";
        // line 169
        if ($this->getAttribute((isset($context["cfg_relation"]) ? $context["cfg_relation"] : null), "displaywork", [], "array")) {
            // line 170
            echo "        ";
            $context["disp"] = call_user_func_array($this->env->getFunction('Relation_getDisplayField')->getCallable(), [(isset($context["db"]) ? $context["db"] : null), (isset($context["table"]) ? $context["table"] : null)]);
            // line 171
            echo "        <fieldset>
            <label>";
            // line 172
            echo _gettext("Choose column to display:");
            echo "</label>
            <select name=\"display_field\">
                <option value=\"\">---</option>
                ";
            // line 175
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["save_row"]) ? $context["save_row"] : null));
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 176
                echo "                    <option value=\"";
                echo twig_escape_filter($this->env, $this->getAttribute($context["row"], "Field", [], "array"), "html", null, true);
                echo "\"";
                // line 177
                if (((isset($context["disp"]) || array_key_exists("disp", $context)) && ($this->getAttribute($context["row"], "Field", [], "array") == (isset($context["disp"]) ? $context["disp"] : null)))) {
                    // line 178
                    echo "                            selected=\"selected\"";
                }
                // line 179
                echo ">
                        ";
                // line 180
                echo twig_escape_filter($this->env, $this->getAttribute($context["row"], "Field", [], "array"), "html", null, true);
                echo "
                    </option>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 183
            echo "            </select>
        </fieldset>
    ";
        }
        // line 186
        echo "
    <fieldset class=\"tblFooters\">
        <input type=\"button\" class=\"preview_sql\" value=\"";
        // line 188
        echo _gettext("Preview SQL");
        echo "\" />
        <input type=\"submit\" value=\"";
        // line 189
        echo _gettext("Save");
        echo "\" />
    </fieldset>
</form>
";
    }

    public function getTemplateName()
    {
        return "table/relation/common_form.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  433 => 189,  429 => 188,  425 => 186,  420 => 183,  411 => 180,  408 => 179,  405 => 178,  403 => 177,  399 => 176,  395 => 175,  389 => 172,  386 => 171,  383 => 170,  381 => 169,  378 => 168,  375 => 167,  371 => 165,  369 => 164,  365 => 162,  359 => 161,  357 => 159,  356 => 158,  355 => 157,  354 => 156,  353 => 155,  352 => 154,  351 => 153,  350 => 152,  349 => 151,  346 => 150,  343 => 149,  340 => 148,  337 => 147,  334 => 146,  331 => 145,  328 => 144,  325 => 143,  322 => 142,  319 => 140,  316 => 139,  313 => 138,  310 => 137,  307 => 136,  304 => 135,  301 => 134,  298 => 133,  295 => 131,  292 => 130,  289 => 129,  286 => 128,  283 => 127,  280 => 126,  277 => 124,  274 => 123,  272 => 122,  269 => 121,  266 => 120,  264 => 118,  261 => 117,  256 => 116,  254 => 115,  251 => 114,  245 => 112,  242 => 111,  240 => 110,  236 => 109,  228 => 105,  226 => 104,  221 => 101,  215 => 99,  212 => 98,  210 => 97,  207 => 96,  199 => 90,  197 => 89,  192 => 86,  189 => 85,  187 => 83,  186 => 82,  185 => 81,  184 => 80,  183 => 79,  182 => 78,  181 => 77,  180 => 76,  179 => 75,  178 => 74,  177 => 72,  175 => 71,  172 => 70,  166 => 69,  163 => 68,  161 => 66,  160 => 65,  159 => 64,  158 => 63,  157 => 62,  156 => 61,  155 => 60,  154 => 59,  153 => 58,  152 => 57,  151 => 56,  150 => 55,  148 => 54,  145 => 53,  142 => 52,  139 => 51,  136 => 50,  133 => 49,  130 => 48,  128 => 47,  127 => 46,  125 => 45,  122 => 44,  119 => 43,  117 => 42,  116 => 41,  114 => 40,  112 => 39,  107 => 38,  104 => 37,  102 => 36,  97 => 34,  93 => 33,  89 => 32,  78 => 25,  76 => 24,  73 => 23,  66 => 20,  64 => 19,  61 => 18,  54 => 15,  52 => 14,  49 => 13,  47 => 12,  43 => 11,  39 => 10,  32 => 6,  29 => 5,  26 => 4,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "table/relation/common_form.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\table\\relation\\common_form.twig");
    }
}
